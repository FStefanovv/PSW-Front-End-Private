import { Injectable } from '@angular/core';
import { shareReplay, tap } from 'rxjs/operators';
import { UserService } from './user.service';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService) {
  }

  login(user: User) {
    var logRes = this.userService.login(user);
    this.setSession(logRes);
    return logRes.pipe(
      shareReplay());
  }



  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
