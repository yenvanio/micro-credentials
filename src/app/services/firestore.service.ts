import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from "./auth.service";
import { map } from "rxjs/operators";
import * as firebase from 'firebase';

@Injectable({
  providedIn: "root"
})
export class FireStoreService {
  constructor(private af: AngularFirestore, private as: AuthService) {}

  addBadge(data) {
    return this.af.collection("badges").add(data);
  }

  deleteBadge(id) {
    return this.af
      .collection("badges")
      .doc(id)
      .delete()
      .then(res => {
        window.location.reload();
      });
  }

  getBadges(uid) {
    return this.af
      .collection("/badges", ref => ref.where("uid", "==", uid))
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            return { data: a.payload.doc.data(), id: a.payload.doc.id };
          })
        )
      );
  }

  getUsers() {
    return this.af
      .collection("/users")
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            return a.payload.doc.data();
          })
        )
      );
  }

  getUser(id) {
    return this.af
      .collection("/users")
      .doc(id)
      .valueChanges();
  }

  getRecommendations() {
    return this.af
      .collection("/badges", ref => ref.where("status.verified.code", "==", 1))
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            return { data: a.payload.doc.data(), id: a.payload.doc.id };
          })
        )
      );
  }

  endorseBadge(badgeid, userid, endorsement) {
    this.updateUserPoints(userid);
    this.updateEndorsement(badgeid, userid, endorsement)
  }

  updateUserPoints(userid) {
    const decrement = firebase.firestore.FieldValue.increment(-1);
    let ref = this.af.collection("/users").doc(userid);   
    ref.update({ endorsements: decrement }) 
  }

  updateEndorsement(badgeid, userid, endorsement) {
    return this.af
      .collection("/badges")
      .doc(badgeid)
      .set(
        {
          status: {
            verified: {
              code: 1,
              endorsements: endorsement,
              status: "Endorsed"
            }
          },
          verifiedBy: [userid]
        },
        { merge: true }
      )
      .then(res => {
        window.location.reload();
      });
  }
}
