import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-menu',
  templateUrl: './manager-menu.component.html',
  styleUrls: ['./manager-menu.component.css']
})
export class ManagerMenuComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  LogOutClick() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  ManagerHomeClick() {
    this.router.navigate(['/manager-home']);
  }

  StatisticsClick() {
    this.router.navigate(['/patient-statistics']);
  }

  ManagerStatisticsClick() {
    this.router.navigate(['/manager-statistics']);
  }

  BloodBankClick() {
    this.router.navigate(['/register-blood-bank']);
  }

  FeedbackClick() {
    this.router.navigate(['/feedback']);

  }
  TenderClick() {
    this.router.navigate(['/tenders/']);

  }
  CreateTender() {
    this.router.navigate(['/create-tender/']);

  }
}
