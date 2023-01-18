import { Injectable } from '@angular/core';
import { shareReplay, tap } from 'rxjs/operators';
import { User } from '../model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from "moment";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  //apiHost: string = 'http://localhost:16177/';
  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  
  constructor(private http: HttpClient) {
  }

  login(user: User) {
    return this.http.post<any>(this.apiHost + 'api/Credentials/login', user, { headers: this.headers }).pipe(shareReplay());
  }

  public setSession(token) {
    console.log(token);
    const expiresAt = moment().add(token.expiresIn, 'second');
    localStorage.setItem('role', token.claims[5].value);
    localStorage.setItem('userId', token.claims[0].value);
    localStorage.setItem('idByRole', token.claims[1].value);
    localStorage.setItem('fullName', token.claims[3].value + token.claims[4].value);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    localStorage.removeItem('idByRole');
    localStorage.removeItem('fullName');
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    //return moment().isBefore(this.getExpiration());
    return true;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  getRole() {
    return localStorage.getItem("role");
  }

  getIdByRole() {
    return localStorage.getItem("idByRole");
  }

  getUserId() {
    return localStorage.getItem("userId");
  }

  getName() {
    return localStorage.getItem("fullName");
  }
}
