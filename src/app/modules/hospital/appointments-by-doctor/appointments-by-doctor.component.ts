import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { CreateAppointmentDTO } from '../model/createAppointmentDTO.model';
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

  public appointments: Appointment[] = [];
  
  public appointmentsToShow: Appointment[] = [];

  public appointmentType:  number = -1;

  filterDate : string = '';
  typeDate : string ="day";


  filterAppointments(e: any){
    if(this.appointmentType==-1)
      this.appointmentsToShow = this.appointments;
    else
      this.appointmentsToShow = this.appointments.filter(app => app.status == this.appointmentType);
  } 

  constructor(private appointmentService: AppointmentService,public dialog: MatDialog) { }

  
  
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

  onSearchTextEntered(searchValue : string){
    if(searchValue != ''){
      this.appointmentsToShow = this.appointments.filter(app => searchValue === '' || app.patientId.toLowerCase().includes(searchValue));
      console.log('currently shown appointments ',this.appointmentsToShow);
    }
    else
        this.appointmentsToShow = this.appointments;
  }

  filterAppointmentsByDate(e: any): void{
  
      if(this.filterDate === '')
        this.appointmentsToShow = this.appointments;
      else if(this.typeDate==='day')
        this.appointmentsToShow = this.appointments.filter(app => app.date === this.filterDate);
      else if(this.typeDate==='week'){
        const firstfulldate = new Date(this.filterDate); // ceo datum 14.11.2000
        const lastday = firstfulldate.getDate() + 7;
        const lastfulldate = new Date(this.filterDate);
        lastfulldate.setDate(lastday);
      
        this.appointmentsToShow = this.appointments.filter(app => new Date(app.date) >= firstfulldate && new Date(app.date)  <= lastfulldate)
      }
    }
}


