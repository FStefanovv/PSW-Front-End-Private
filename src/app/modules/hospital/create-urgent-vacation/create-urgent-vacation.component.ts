import { Router } from '@angular/router';
import { UrgentVacationRequest } from './../model/urgentVacationRequestDTO.model';
import { UrgentVacationService } from './../services/urgent-vacation.service';
import { Component } from "@angular/core";
import { HttpErrorResponse } from '@angular/common/http';
import { throwError,catchError } from 'rxjs';

@Component({
  selector: "create-urgent-vacation",
  templateUrl: "./create-urgent-vacation.component.html" 
})
export class CreateUrgentVacationComponent {
  public request: UrgentVacationRequest = new UrgentVacationRequest()
  public showAppsNull: boolean = false
  public appsList: any
  public prika: string
  public startNull: boolean = false
  public endNull: boolean = false
  public descriptionNull: boolean = false
  constructor(private urgentVacationService: UrgentVacationService,private router: Router){}

  ngOnInit(){
    this.prika = "Prika moj problem je tvoj"
  }

  public createRequest(){
    if (!this.isValidInputStart()) this.startNull = true
    if (!this.isValidInputEnd()) this.endNull = true
    if (!this.isValidInputDescription()) this.descriptionNull = true
    if(this.startNull == true || this.endNull == true || this.descriptionNull == true) return
    this.urgentVacationService.sendRequest(this.request).subscribe(
      res => {
        alert("Zahtev poslat.")
      },
      error => {
        //err: String
        const err = JSON.stringify(error)
        const errArray = err.split(" ")
        var ispis = ""
        for(let i=9;i<= errArray.length; i++)
        {
          ispis = ispis + " " +errArray[i]
        }
        const ispisArray = ispis.split("\\")
        const ispis1Array = ispisArray[0].split("\"")
        alert(ispis1Array[0])
        //alert(error.errorMessage);
        
        if(ispis1Array[0] === " You have appointment(s) in choosen time span!"){
          this.showAppsNull = true
        this.urgentVacationService.getAppointmentsForDoctor("DOC1",this.request.start,this.request.end).subscribe(
          res => {
            this.appsList = res
          }
        )
        }
        //this.router.navigate(['/vacations/seeAppointments/'+"DOC1"])//ovde ce ici redovan id
      }
    )
  }

  private isValidInputStart(): boolean {
    this.startNull = false
    return this.request?.start != '';
  }
  private isValidInputEnd(): boolean {
    this.endNull = false
    return this.request?.end != '';
  }
  private isValidInputDescription(): boolean {
    this.descriptionNull = false
    return this.request?.description != '';
}

}