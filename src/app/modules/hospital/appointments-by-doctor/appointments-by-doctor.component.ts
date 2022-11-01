import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../model/appointment.model';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-appointments-by-doctor',
  templateUrl: './appointments-by-doctor.component.html',
  styleUrls: ['./appointments-by-doctor.component.css']
})
export class AppointmentsByDoctorComponent implements OnInit {

  public appointments: Appointment[] = [];
  
  public appointmentsToShow: Appointment[] = [];

  public appointmentType:  number = -1;

  filterAppointments(e: any){
    if(this.appointmentType==-1)
      this.appointmentsToShow = this.appointments;
    else
      this.appointmentsToShow = this.appointments.filter(app => app.status == this.appointmentType);
  } 

  constructor(private appointmentService: AppointmentService) { }
  
  ngOnInit(): void {
    const doctor = 'DOC1';
    this.appointmentService.getAppointmentsByDoctor(doctor).subscribe(res => {

      this.appointments = res;

      this.sortByDateTime();
      this.setDateAndTime();

      this.appointmentsToShow = this.appointments;
    });
  }
  
  sortByDateTime(): void {
    this.appointments = this.appointments.sort((a, b) => Date.parse(a.start) > Date.parse(b.start)? 1 : -1);
  }

  setDateAndTime(): void {
    for(let app of this.appointments){
        const dateTimeSplit = app.start.split(' ');
        app.date = dateTimeSplit[0];
        const time = dateTimeSplit[1].split(':')
        app.startTime = time[0]+':'+time[1];
    }
  }

}
