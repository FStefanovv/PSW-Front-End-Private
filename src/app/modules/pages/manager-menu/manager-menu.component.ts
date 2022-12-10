import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../hospital/services/auth.service';

@Component({
  selector: 'app-manager-menu',
  templateUrl: './manager-menu.component.html',
  styleUrls: ['./manager-menu.component.css']
})
export class ManagerMenuComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    
  }

  logOutClick() {
    this.authService.logOut();
    this.router.navigate(['/']);
  }

}
