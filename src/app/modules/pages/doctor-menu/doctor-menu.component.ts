import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-menu',
  templateUrl: './doctor-menu.component.html',
  styleUrls: ['./doctor-menu.component.css']
})
export class DoctorMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  LogOutClick() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  DoctorHomeClick() {
    this.router.navigate(['/doctor-home']);
  }

  AppointmentsClick() {
    this.router.navigate(['/appointments']);
  }

  PatientsClick() {
    this.router.navigate(['/patients/treatments']);
  }

  VacationClick() {
    this.router.navigate(['/vacation-requests-by-doctor']);
  }

  BloodRequestClick() {
    this.router.navigate(['/bloodRequest']);
  }
}
