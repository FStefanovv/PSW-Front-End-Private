import { AuthService } from './../../hospital/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-menu',
  templateUrl: './manager-menu.component.html',
  styleUrls: ['./manager-menu.component.css']
})
export class ManagerMenuComponent implements OnInit {

  constructor(private router: Router,private authService: AuthService) { }
  ngOnInit(): void {
  }

  LogOutClick() {
    this.authService.logout()
    this.router.navigate(['/']);
  }

  ManagerHomeClick() {
    this.router.navigate(['/manager-home']);
  }

  StatisticsClick() {
    this.router.navigate(['/patient-statistics']);
  }

  ManagerStatisticsClick() {
    console.log(this.authService.getRole);
    console.log(this.authService.isLoggedIn());
    this.router.navigate(['/manager-statistics']);
  }

  BloodBankClick() {
    this.router.navigate(['/register-blood-bank']);
  }

  FeedbackClick() {
    this.router.navigate(['/feedback']);

  }
  SupplyClick() {
    this.router.navigate(['/blood-supplies']);

  }
  SubscriptionClick() {
    this.router.navigate(['/blood-subscription']);

  }
  ReportStats() {
    this.router.navigate(['/report-statistics']);

  }
}
