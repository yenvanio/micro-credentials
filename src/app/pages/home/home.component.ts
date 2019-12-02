import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";
import { BadgerService } from "src/app/services/badger.service";
import { FireStoreService } from "src/app/services/firestore.service";
import { AngularFireStorage } from "@angular/fire/storage";
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Badge } from 'src/app/models/badge';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  user;
  users;
  recommendations;
  addCourse: FormGroup;
  loginBadger: FormGroup;
  downloadableURL: string;
  badger_access_token: any;
  displayedColumns = ["photo", "name", "profile"];

  constructor(
    private as: AuthService,
    private bs: BadgerService,
    private fs: FireStoreService,
    private afs: AngularFireStorage,
    private fb: FormBuilder,
    private sbs: SnackbarService,
    public dialog: MatDialog,
    public router: Router
  ) {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);

    this.createFormGroups();
  }

  ngOnInit() {  
    this.badger_access_token = JSON.parse(localStorage.getItem('badger_access_token'));
    console.log(this.badger_access_token);
    this.getUser();
    this.getUsers();
    this.getRecommendations();
  }

  navigateToProfile(id) {
    this.router.navigate([`profile/${id}`]);
  }

  openModal(badge): void {
    const dialogRef = this.dialog.open(BadgeModal, {
      width: '350px',
      data: badge
    });

    dialogRef.afterClosed().subscribe(result => { /** Do Something On Close*/ });
  }

  getRecommendations() {
    let recommendations: any[] = [];
    this.fs.getRecommendations().subscribe(res => {
      res.forEach(b => {
        let d: any = b.data;
        d.id = b.id;
        recommendations.push(d)
      })
      this.recommendations = recommendations;
      console.log(this.recommendations);
    })
  }

  getUser() {
    this.fs.getUser(this.as.uid).subscribe(res => {
      this.user = res;
    })
  }

  getUsers() {
    let users: any[] = [];
    this.fs.getUsers().subscribe(res => {
      res.forEach(b => {
        let d: any = b;
        if (this.as.uid != d.uid) {
          users.push(b);
        }
      });
      console.log(users);
      this.users = users;
    });
  }

  // Initialize FormGroup
  createFormGroups() {
    this.addCourse = this.fb.group({
      title: new FormControl("", [Validators.required]),
      platform: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
      instructor: new FormControl("", [Validators.required]),
      url: new FormControl("", [Validators.required])
    });

    this.loginBadger = this.fb.group({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }

  isValidCourse(fc: string) {
    return !this.addCourse.get(fc).valid && this.addCourse.get(fc).touched;
  }

  isValidLogin(fc: string) {
    return !this.loginBadger.get(fc).valid && this.loginBadger.get(fc).touched;
  }

  isFileUploaded() {
    return this.downloadableURL === undefined
  }

  // Handle File Upload
  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      this.uploadFile(event.target.files[0]);
    }
  }

  uploadFile(file) {
    const path = `/badges/${Date.now()}_${Math.random()}`;
    const task = this.afs.upload(path, file).then(() => {
      const ref = this.afs.ref(path);
      ref.getDownloadURL().subscribe(url => {
        console.log(url);
        this.downloadableURL = url;
        console.log(this.addCourse.invalid);
      });
    });
  }

  // Handle Add Course Form Submission
  onAddCourse(form: FormGroup) {
    form.value.uid = this.as.userData.uid;
    form.value.file = this.downloadableURL;
    console.log(form.value);

    form.value.status = {
      verified: {
        code: 0,
        status: "Not Verified",
        endorsements: 0
      }
    };

    this.fs.addBadge(form.value).then(res => {
      console.log('added');
      this.sbs.viewBadges("Added Badge!", 'VIEW BADGES');
      this.addCourse.reset();
      this.markFormGroupPristine(this.addCourse);
    });
  }

  private markFormGroupPristine(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsPristine();

      if (control.controls) {
        this.markFormGroupPristine(control);
      }
    });
  }

  shouldDisableImport() {
    if (this.badger_access_token != null) {
      return false;
    } else if (this.loginBadger.invalid || this.loginBadger.pristine) {
      return true;
    }
  }

  // Handle Form Submission
  onLoginBadger(form: FormGroup) {
    if (this.badger_access_token === null || this.badger_access_token === undefined) {
      this.bs.getAccessToken(form.value.username, form.value.password).subscribe((data: any[])=>{
        this.badger_access_token = this.badger_access_token;
        localStorage.setItem('badger_access_token', JSON.stringify(data));
      })  
    }
    this.bs.getBadges(this.badger_access_token);
  }
}

@Component({
  selector: 'badge-modal',
  templateUrl: './badge-modal.html',
})
export class BadgeModal {

  constructor(
    public dialogRef: MatDialogRef<BadgeModal>,
    @Inject(MAT_DIALOG_DATA) public data: Badge) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}