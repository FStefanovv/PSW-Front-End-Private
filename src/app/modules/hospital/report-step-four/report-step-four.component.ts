import { ReportService } from './../services/report.service';
import { ReportDTO } from './../model/reportDTO.model';
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Drug } from "../model/drug.model";
import { Symptom } from "../model/symptom.model";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../model/appointment.model';

@Component({
  selector: 'report-step-four',
  templateUrl: './report-step-four.component.html'
})
export class ReportStepFour{
  public backString: string = ""
  @Output() backEmit4 = new EventEmitter<{backString4: string}>()
  @Input() symptoms: Symptom[]
  @Input() drugs: Drug[]
  @Input() description: string = ""
  @Input() reportId: string = ""
  public appointmentId: string = ""
  public loggedDoctorId: string;
  public appointments: Appointment[] = [];
  
  constructor(private appointmentService: AppointmentService, private reportService: ReportService, private route: ActivatedRoute, private authService: AuthService, private router: Router){
    this.route.queryParams.subscribe(params =>{
      this.appointmentId = params.appointmentId
    })
  }

  ngOnInit():void{
    this.loggedDoctorId = this.authService.getIdByRole();
    this.appointmentService.getAllAppointments().subscribe( res => {
      this.appointments = res;
    });
  }
  public submit(){
    let reportDTO: ReportDTO = new ReportDTO()
    reportDTO.appointmentId = this.appointmentId
    reportDTO.doctorId = parseInt(this.loggedDoctorId);
    reportDTO.patientId = (this.appointments.filter(app => app.id == this.appointmentId))[0].patientId;
    reportDTO.description = this.description
    reportDTO.symptoms = this.symptoms
    reportDTO.drugs = this.drugs
    this.reportService.setFields(this.reportId,reportDTO).subscribe(res=>{
      alert("Poslato")
    })
    this.router.navigate(['/appointments-by-doctor'])
  }
  public back(){
    this.reportService.eventHappened(this.reportId,-1).subscribe(
      res => {

      }
    )
    this.backEmit4.emit({backString4: this.backString})


    
  }
}