import { Router } from '@angular/router';
import { UrgentVacationRequest } from './../model/urgentVacationRequestDTO.model';
import { UrgentVacationService } from './../services/urgent-vacation.service';
import { Component } from "@angular/core";

@Component({
  selector: "create-urgent-vacation",
  templateUrl: "./create-urgent-vacation.component.html" 
})
export class CreateUrgentVacationComponent {
  public request: UrgentVacationRequest = new UrgentVacationRequest()
  public showAppsNull: boolean = false
  public appsList: any
  public prika: string
  constructor(private urgentVacationService: UrgentVacationService,private router: Router){}

  ngOnInit(){
    this.prika = "Prika moj problem je tvoj"
  }

  public createRequest(){
    this.urgentVacationService.sendRequest(this.request).subscribe(
      res => {
        alert("Zahtev poslat.")
      },
      error => {
        alert("Postoje termini u izabranom vremenskom periodu!")
        
        this.showAppsNull = true
        this.urgentVacationService.getAppointmentsForDoctor("DOC1",this.request.start,this.request.end).subscribe(
          res => {
            this.appsList = res
          }
        )
        //this.router.navigate(['/vacations/seeAppointments/'+"DOC1"])//ovde ce ici redovan id
      }
    )
  }

}