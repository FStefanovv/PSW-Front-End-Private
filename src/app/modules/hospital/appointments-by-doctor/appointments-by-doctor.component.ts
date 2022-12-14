import { ReportToShow } from './../model/reportToShow.model';
import { Patient } from './../model/patient.model';
import { Component, OnInit, ɵɵqueryRefresh, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { CreateAppointmentDTO } from '../model/createAppointmentDTO.model';
import { Appointment } from '../model/appointment.model';
import { MatRadioModule } from '@angular/material/radio';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { Observable, interval, Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { RescheduleAppointmentDTO } from '../model/rescheduleAppointmentDTO.model';
import { Router } from '@angular/router';
import { ReportService } from '../services/report.service';


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
  constructor(private appointmentService: AppointmentService,
    public dialog: MatDialog,
    private router: Router,
    private reportService: ReportService) { }

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

  cancelled(id: any): void {
    let app = this.appointmentsToShow.find((a) => { return a.id === id })
    let trueFlag = app?.status === 1 ? false : true
    if (trueFlag) {
      if (confirm('Are you sure to cancel this appointment?')) {
        this.appointments = this.appointments.filter((app) => app.id !== id);
        this.appointmentService.refreshList();
        this.appointmentService.deleteAppointment(id)
          .subscribe(
            res => {
              this.appointmentService.refreshList();
              window.location.reload();
            }
          );
      }
    }
    else {
        alert("Choosen appointment is not cancellable")
    }
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
    let flagString = this.filterDate.split("-")
    let fullDate = flagString[0] + '/' + flagString[1] + '/' + flagString[2]
      if(this.filterDate === '')
        this.appointmentsToShow = this.appointments;
      else if(this.typeDate==='day')
        this.appointmentsToShow = this.appointments.filter(app => app.date === fullDate);
      else if(this.typeDate==='week'){
        const firstfulldate = new Date(fullDate); // ceo datum 14.11.2000
        const lastday = firstfulldate.getDate() + 7;
        const lastfulldate = new Date(fullDate);
        lastfulldate.setDate(lastday);
      
        this.appointmentsToShow = this.appointments.filter(app => new Date(app.date) >= firstfulldate && new Date(app.date)  <= lastfulldate)
      }
    }

    onRescheduleClicked(id : string){
      const rescheduledApp = this.appointments.find((a) => {return a.id === id});
      this.router.navigate(['appointments/reschedule'],{queryParams:{id:rescheduledApp?.id}})
    }

    writeReport(appId: string){
        this.router.navigate(['reportdev'],{queryParams:{appointmentId: appId}})
    }

    reviewReport(appId: string,patId:string){
      this.reportService.getReport(appId).subscribe(
        res=>{
        console.log(res)
        this.router.navigate(['showreportdev'],{queryParams:{appointmentId: appId,patientId:patId,reportId: res.id}})
      })
    }
}


