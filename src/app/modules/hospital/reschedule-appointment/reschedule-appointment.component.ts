import { Component, ViewChild , Input,NgModule, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';
import { RescheduleAppointmentDTO } from '../model/rescheduleAppointmentDTO.model';


@Component({
    selector: 'reschedule-appointment',
    templateUrl: './reschedule-appointment.component.html',
    styleUrls: ['./reschedule-appointment.component.css']
})

export class RescheduleAppointmentComponent implements OnInit {
    @ViewChild('rescheduleForm') form: NgForm;
    public parsedDate: string[] | undefined;

    //public appointmentToChange: RescheduleAppointmentDTO = new RescheduleAppointmentDTO()

    idproba: string | null
    

    constructor(private appointmentService: AppointmentService,public router: Router) { }

  ngOnInit(): void {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    this.appointmentService.getAppointmentToReschedule(urlParams.get('id')).subscribe(
      res => {
        //this.appointmentToChange = res
        this.form.setValue({
          appId: res.id,
          patientId: res.patientId,
          date: res.date,
          time: res.time
        })
      }
    )
  }

    onAppointmentRescheduled(appointment: any){
        let rescheduledAppointment = new RescheduleAppointmentDTO()
        rescheduledAppointment.id = appointment.appId;
        rescheduledAppointment.date = appointment.date;
        rescheduledAppointment.time = appointment.time
        this.appointmentService.rescheduleAppointment(rescheduledAppointment).subscribe(
          res => {
            alert("radi")
          }
        );
      }
}