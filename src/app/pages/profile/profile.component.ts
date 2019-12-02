import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
import { FireStoreService } from 'src/app/services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  displayedColumns = ["course", "platform", "date", "file", "status", "endorse"];
  user;
  badges;
  uid;
  currUser;

  constructor(
    private as: AuthService, 
    private fs: FireStoreService,
    private sbs: SnackbarService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUID();
    this.getCurrUser();
    this.getUser();
    this.getBadges();
  }

  getCurrUser() {
    this.fs.getUser(this.as.uid).subscribe(res => {
      this.currUser = res;
    });
  }

  isSameUser() {
    return this.as.uid == this.uid
  }

  getUID() {
    let d: any = this.route.params;
    this.uid = d._value.id;
    console.log(this.uid);
  }

  getBadges() {
    let badges: any[] = [];
    this.fs.getBadges(this.uid).subscribe(res => {
      res.forEach(b => {
        let d: any = b.data;
        d.id = b.id;
        badges.push(d)
      })
      this.badges = badges;
      console.log(this.badges);
    });
  }

  getUser() {
    this.fs.getUser(this.uid).subscribe(res => {
      this.user = res;
    });
  }

  endorseBadge(id, endorsement) {
    console.log(this.as.userData);
    if (this.as.isLoggedIn) {
      if (this.currUser.endorsements == 0) {
        this.sbs.dismiss('No more endorsement points left', 'DISMISS');
      } else {
        this.fs.endorseBadge(id, this.as.uid, endorsement + 1);
      }
    } else {
      this.sbs.dismiss('Login to Endorse', 'DISMISS');
    }
  }

}
