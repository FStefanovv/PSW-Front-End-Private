import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: "show-appointments-urgent-vacation",
  templateUrl: "./show-appointments-urgent-vacation.component.html" 
})
export class ShowAppointmentsUrgentVacationComponent implements OnInit{
  @Input() prika: string
  @Input() appsList: any
  ngOnInit():void{

  }
}