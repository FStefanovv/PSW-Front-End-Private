import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthService } from './modules/hospital/services/auth.service';
import {PopUpComponent} from "./pop-up/pop-up.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HospitalFront';
  public manager: boolean = false;
  public doctor: boolean = false;
  constructor(private dialogRef: MatDialog, private router: Router, private authService: AuthService) {

    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationStart) {
        this.manager = (this.authService.getRole() === "MANAGER");
        this.doctor = (this.authService.getRole() === "DOCTOR");
      }
      if (event instanceof NavigationEnd) {
        this.manager = (this.authService.getRole() === "MANAGER");
        this.doctor = (this.authService.getRole() === "DOCTOR");
      }

      if (event instanceof NavigationError){
        this.manager = (this.authService.getRole() === "MANAGER");
        this.doctor = (this.authService.getRole() === "DOCTOR");
      }
   
    });


  }
 
  openDialog(){
    this.dialogRef.open(PopUpComponent, {

      data: {
        message:''
      }
    });
  }

  

 
}
