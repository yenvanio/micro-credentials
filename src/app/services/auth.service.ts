import { Injectable, NgZone } from '@angular/core';
import { User } from "../models/user";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {    
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  get userProfilePicture(): String {
    if (this.isLoggedIn && this.userData != null) {
      return this.userData.photoURL;
    } else {
      return '../favicon.ico'
    }
  }

  get userName(): String {
    if (this.isLoggedIn && this.userData != null) {
      return this.userData.displayName;
    } else {
      return JSON.parse(localStorage.getItem('user')).displayName;
    }
  }

  get uid(): string {
    if (this.isLoggedIn && this.userData != null) {
      return this.afAuth.auth.currentUser.uid;
    } else {
      return JSON.parse(localStorage.getItem('user')).uid;
    }
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['home']);
        })
      this.endorsementDoesNotExist(result.user).subscribe(res => {
        this.userData = res;
      }); 
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

  /* Setting up user data in Firestore database 
  using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    return this.afs.collection('users').doc(user.uid).set(this.userData, { merge: true })
  }

  endorsementDoesNotExist(user) {
    return this.afs
      .collection("/users")
      .doc(user.uid)
      .valueChanges();
  }

  // Sign out 
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }

}