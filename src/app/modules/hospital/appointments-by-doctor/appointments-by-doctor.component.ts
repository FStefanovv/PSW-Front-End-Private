import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../model/appointment.model';
import { MatRadioModule } from '@angular/material/radio';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { Observable, interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-appointments-by-doctor',
  templateUrl: './appointments-by-doctor.component.html',
  styleUrls: ['./appointments-by-doctor.component.css']
})
export class AppointmentsByDoctorComponent implements OnInit {

  appointments: Appointment[] = [];
  appointmentsToShow: Appointment[] = [];
  appointmentType: string = 'Scheduled';


  changeAppType(e: any){
    if(!e.target.value)
      this.appointmentType = 'Scheduled';
    this.appointmentType = e.target.value;
    console.log(this.appointmentType)
    this.appointmentsToShow = this.appointments.filter(app => app.status == this.appointmentType)
  }

  constructor(private appointmentService: AppointmentService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAppointmentsByDoctor();
    this.appointmentsToShow = this.appointments.filter(app => app.status=='Scheduled');
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
  openDialog(id: any): void {
   

    this.dialog.open(MyDialogComponent).beforeClosed().subscribe(result => {
      if (result) {
        
     
        this.appointments = this.appointments.filter((app) => app.id !== id);

      //  this.appointmentService.updateAppointment(appointment)
      //    .subscribe(app => {
      //  if (app.id === id)
      //    app.status='Cancelled'
      //});
      
        
      }


    })

  }


}
