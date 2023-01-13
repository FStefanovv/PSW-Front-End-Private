import { Component, ViewChild , Input,NgModule, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';
import { RescheduleAppointmentDTO } from '../model/rescheduleAppointmentDTO.model';
import { Appointment } from '../model/appointment.model';
import { DoctorShiftDTO } from '../model/doctorsShiftDTO.model';
import { DoctorService } from '../services/doctor.service';


@Component({
    selector: 'reschedule-appointment',
    templateUrl: './reschedule-appointment.component.html',
    styleUrls: ['./reschedule-appointment.component.css']
})

export class RescheduleAppointmentComponent implements OnInit {

  constructor(private appointmentService: AppointmentService, private doctorService: DoctorService, private route: ActivatedRoute, public router: Router) { }

  public chosenAppointment: RescheduleAppointmentDTO = new RescheduleAppointmentDTO();
  public doctor: DoctorShiftDTO | undefined = undefined;
  public arrayForShift: Array<string> = [];
  public appId: string;
  public loggedDoctorId: string;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.appId = params.id;
    });
    this.loggedDoctorId = localStorage.getItem("idByRole");
    this.appointmentService.getAppointmentToReschedule(this.appId).subscribe( res => {
      this.chosenAppointment = res;
    });
    this.doctorService.getDoctor(parseInt(this.loggedDoctorId)).subscribe(res => {
      this.doctor = res;
      for (let index = this.doctor?.startWorkTime; index < this.doctor?.endWorkTime; index++) {
          this.arrayForShift.push(index.toString() + ":00");
          this.arrayForShift.push(index.toString() + ":20");
          this.arrayForShift.push(index.toString() + ":40");
      }
    });
  }

  onAppointmentRescheduled(){
    this.appointmentService.rescheduleAppointment(this.chosenAppointment).subscribe(
      res => {
        alert("Appointment rescheduled.");
      },
      error => {
        alert("There was an error with your request.");
      }
    );
  }
}