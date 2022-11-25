import { UrgentVacationService } from './../services/urgent-vacation.service';
import { UrgentVacationDoctorDTO } from './../model/urgentVacationDoctorDTO.model';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: "show-appointments-urgent-vacation",
  templateUrl: "./show-appointments-urgent-vacation.component.html" 
})
export class ShowAppointmentsUrgentVacationComponent implements OnInit{
  @Input() prika: string
  @Input() appsList: any
  id: string
  startDate: string
  startTime: string
  doctors: any
  showDoctors: boolean = false
  appId: string 
  idToDelete: string

  constructor(public urgentVacationService: UrgentVacationService) {}
  ngOnInit():void{
    
  }

  callbackFunctionToDelete = (id: string): void => {
    this.showDoctors = false
    for (var i =0; i < this.appsList.length; i++)
      if (this.appsList[i].id === id) {
        this.appsList.splice(i,1);
        break;
   }
  }

  onProbaClicked(eventData: {idToDelete:string}){

  }

  public changeDoctor(p: any){
    this.urgentVacationService.getDoctors(p.date, p.time).subscribe(
      res =>{
        this.startDate = p.date
        this.startTime = p.time
        this.appId = p.id
        this.doctors = res
        this.showDoctors = true
      },
      error =>{
        alert("There are no free doctors! Please change dates.")
        //alert(error.errorMessage)
        window.location.reload
      }
    )
  }
}