import { Injectable, NgZone } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class SnackbarService {
  constructor(public snackBar: MatSnackBar, private zone: NgZone, public router: Router) {}

  public viewBadges(message, action, duration = 50000) {
    this.zone.run(() => {
      let snackBarRef = this.snackBar.open(message, action, { duration });
      snackBarRef.onAction().subscribe(() => this.goToBadges());
    });
  }

  public dismiss(message, action, duration = 50000) {
    this.zone.run(() => {
      let snackBarRef = this.snackBar.open(message, action, { duration });
      snackBarRef.onAction().subscribe(() => this.snackBar.dismiss());
    });
  }

  goToBadges() {
    this.router.navigate(['badges']);
  }
}
