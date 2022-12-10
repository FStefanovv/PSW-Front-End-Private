import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { AuthService } from './modules/hospital/services/auth.service';
import {PopUpComponent} from "./pop-up/pop-up.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HospitalFront';

  constructor(private dialogRef: MatDialog, private authService: AuthService) { }
  public manager: boolean = (this.authService.getRole() === "MANAGER");
  public doctor: boolean = (this.authService.getRole() === "DOCTOR");
  openDialog(){
    this.dialogRef.open(PopUpComponent, {

      data: {
        message:''
      }
    });
  }

  

 
}
