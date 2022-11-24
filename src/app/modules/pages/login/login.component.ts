import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { User } from '../../hospital/model/user.model';
import { UserService } from '../../hospital/services/user.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../hospital/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = new User();
  public variable = '';

  constructor(private toast: NgToastService, private router: Router, private authService: AuthService) { }


  ngOnInit(): void {
  }

  login() {
    if (!this.checkValidity()) return;
    this.authService
      .login(this.user)
      .subscribe(response => {
        var role = JSON.parse(window.atob(localStorage.getItem('id_token').split('.')[1]))["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        if (role === "MANAGER") {
          this.router.navigate(['/manager-home']);
        } else if (role === "DOCTOR") {
          this.router.navigate(['/doctor-home']);
        }
      },
        error => {
          this.toast.error({ detail: 'Incorrect email or password!', summary: "Please try again.", duration: 5000 });
          return;
        });
  }

  checkValidity() {
    if (this.user.email === '' || this.user.password === '') {
      this.toast.error({ detail: 'Required fields are empty!', summary: "Please complete the form.", duration: 5000 });
      return false;
    }
    return true;
  }

}




