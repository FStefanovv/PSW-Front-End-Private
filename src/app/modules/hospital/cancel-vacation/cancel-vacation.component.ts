import { CancelVacationService } from './../services/cancel-vacation.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector:"cancel-vacation",
  templateUrl: "cancel-vacation.component.html"
})
export class CancelVacationComponent implements OnInit{
  vacationList: any
  constructor(public cancelVacationService : CancelVacationService){}

  ngOnInit(): void{
    this.cancelVacationService.getVacations("DOC1").subscribe(
      res => {
        this.vacationList = res
      }
    )
  }

  public cancelVacation(vacation: any){
    this.cancelVacationService.cancelVacation(vacation.id).subscribe(
      res => {
        alert("Cancelled")
        for (var i =0; i < this.vacationList.length; i++)
        if (this.vacationList[i].id === vacation.id) {
        this.vacationList.splice(i,1);
        break;
        }
      }
      
    )
  }


}