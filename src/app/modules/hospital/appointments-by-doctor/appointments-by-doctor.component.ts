import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { CreateAppointmentDTO } from '../model/createAppointmentDTO.model';
import { MatRadioModule } from '@angular/material/radio';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-appointments-by-doctor',
  templateUrl: './appointments-by-doctor.component.html',
  styleUrls: ['./appointments-by-doctor.component.css']
})
export class AppointmentsByDoctorComponent implements OnInit {

  appointments: CreateAppointmentDTO[] = [];
  appointmentsToShow: CreateAppointmentDTO[] = [];
  appointmentType: string = 'Scheduled';

  changeAppType(e: any){
    if(!e.target.value)
      this.appointmentType = 'Scheduled';
    this.appointmentType = e.target.value;
    console.log(this.appointmentType)
    this.appointmentsToShow = this.appointments.filter(app => app.status == this.appointmentType)
  }

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.getAppointmentsByDoctor();
    this.appointmentsToShow = this.appointments.filter(app => app.status='Scheduled');
    console.log('currently shown appointments ',this.appointmentsToShow);
  }

  getAppointmentsByDoctor(): void {
    const doctor = 'DOC1';
    this.appointments = this.appointmentService.getAppointmentsByDoctorNoHttp(doctor);
    //the lines bellow will be uncommented once appointments are fetched from the back-end
    /*
    this.appointmentService.getAppointmentsByDoctor(doctor)
      .subscribe(appointments => this.appointments = appointments);
    */
  }

}
