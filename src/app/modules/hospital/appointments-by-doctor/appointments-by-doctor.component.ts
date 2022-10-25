import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../model/appointment.model';

@Component({
  selector: 'app-appointments-by-doctor',
  templateUrl: './appointments-by-doctor.component.html',
  styleUrls: ['./appointments-by-doctor.component.css']
})
export class AppointmentsByDoctorComponent implements OnInit {

  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.getAppointmentsByDoctor();
  }

  getAppointmentsByDoctor(): void {
    const doctor = 'DOC1'
    this.appointments = this.appointmentService.getAppointmentsByDoctorNoHttp(doctor);

    //the lines bellow will be uncommented once appointments are fetched from the back-end
    /*
    this.appointmentService.getAppointmentsByDoctor(doctor)
      .subscribe(appointments => this.appointments = appointments);
    */
  }

}
