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

  name: string;

  ngOnInit(): void {
    this.name = this.authService.getName();
  }

}
