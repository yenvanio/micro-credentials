import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SnackbarService } from '../services/snackbar.service';
import { map } from "rxjs/operators";

@Injectable()
export class BadgerService {
  headers = new HttpHeaders().set("content-type", "application/json");

  constructor(private http: HttpClient, private sbs: SnackbarService) {}

  getAccessToken(username, password) {
    const url = `https://api.badgr.io/o/token?username=${username}&password=${password}`;
    return this.http.post(url, { headers: this.headers });
  }

  getRefreshToken(token) {
    const url = `https://api.badgr.io/o/token?grant_type=refresh_token&refresh_token=${token.access_token}`;
    return this.http.post(url, { headers: this.headers });
  }

  getBadges(token) {
    const url = `https://api.badgr.io/v2/backpack/assertions&token=${token.access_token}`;
    const _headers = {
      "Content-Type": "application/json",
      Authorization: token.access_token
    };
    return this.http
      .get(url, { headers: _headers })
      .subscribe(
        data => console.log(data),
        error => this.sbs.dismiss('No Badges to Import', 'DISMISS')
      );
  }
}
