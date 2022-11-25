import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../hospital/services/auth.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  doctorHomeClick(){
    this.router.navigate(['/doctor-home']);
  }

  logOutClick(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

  appointmentsClick(){
    this.router.navigate(['/appointments']);
  }

}
