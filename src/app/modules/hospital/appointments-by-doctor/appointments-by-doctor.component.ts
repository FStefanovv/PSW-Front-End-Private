import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../model/appointment.model';
import { MatRadioModule } from '@angular/material/radio';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-appointments-by-doctor',
  templateUrl: './appointments-by-doctor.component.html',
  styleUrls: ['./appointments-by-doctor.component.css']
})
export class AppointmentsByDoctorComponent implements OnInit {

  appointments: Appointment[] = [];
  appointmentsToShow: Appointment[] = [];
  appointmentType:  number = 0;

  changeAppType(e: any){
    if(!e.target.value)
      this.appointmentType =  0;
    this.appointmentType = e.target.value;
    console.log(this.appointmentType)
    this.appointmentsToShow = this.appointments.filter(app => app.status == this.appointmentType)
  }

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    const doctor = 'DOC1';
    this.appointmentService.getAppointmentsByDoctor(doctor).subscribe(res => 
      {
      this.appointments = res;
      })
    console.log(this.appointments);
    this.appointmentsToShow = this.appointments.filter(app => app.status==0);
  }

}
