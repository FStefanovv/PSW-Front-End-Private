import { Appointment } from './../model/appointment.model';
import { UrgentVacationService } from './../services/urgent-vacation.service';
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";


@Component({
  selector: 'show-doctors-for-change',
  templateUrl: 'show-doctors-for-change.component.html'
})
export class ShowDoctorsForChange implements OnInit{
  @Input() startDate: string
  @Input() startTime: string
  @Input() doctors: any
  @Input() appId : string
  @Input() callbackFunction : (id: string) => void
  
  constructor(public urgentVacationService: UrgentVacationService) {}

  ngOnInit(): void {
    
  }

  public selectDoctor(id: string){
    this.urgentVacationService.changeDoctor(id,this.appId).subscribe(
      res => {
        this.callbackFunction(this.appId)
        alert("Succesfully changed.")
      },
      error =>{
        alert("Doctor is busy!")
      }
    )
  }
}