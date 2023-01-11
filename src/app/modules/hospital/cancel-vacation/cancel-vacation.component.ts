import { CancelVacationService } from './../services/cancel-vacation.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector:"cancel-vacation",
  templateUrl: "cancel-vacation.component.html"
})

export class CancelVacationComponent implements OnInit{

  vacationList: any;
  public loggedDoctorId: string;

  constructor(private cancelVacationService : CancelVacationService, private authService: AuthService){}

  ngOnInit(): void{
    this.loggedDoctorId = this.authService.getIdByRole();
    this.cancelVacationService.getVacations(parseInt(this.loggedDoctorId)).subscribe(
      res => {
        this.vacationList = res;
      });
  }

  cancelVacation(vacation: any){
    this.cancelVacationService.cancelVacation(vacation.id).subscribe(
      res => {
        alert("Vacation has been successfully cancelled.");
        for (var i =0; i < this.vacationList.length; i++){
          if (this.vacationList[i].id === vacation.id) {
            this.vacationList.splice(i,1);
            break;
          }
        }
      }
    )
  }
}