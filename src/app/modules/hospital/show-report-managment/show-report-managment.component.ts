import { PatientService } from './../services/patient.service';
import { Patient } from './../model/patient.model';
import { ReportToShow } from './../model/reportToShow.model';
import { ReportService } from './../services/report.service';
import { Appointment } from './../model/appointment.model';
import { Component } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'show-report-managment',
  templateUrl: './show-report-managment.component.html'
})
export class ShowReportManagment{
  public appointmentId: string
  public report: ReportToShow
  public drugPrescription: any
  public appointment: any
  public patient: any
  public patientBool: boolean = false
  public patientId: string 
  public descBool: boolean =false

  ngOnInit():void{
    this.route.queryParams.subscribe(params =>{
      this.appointmentId = params.appointmentId
      this.patientId = params.patientId
    })
    this.appointmentService.getAppointmentToReschedule(this.appointmentId).subscribe(
      res => {
        this.appointment = res
      }
    )
    this.patientService.getPatientForReport(this.patientId).subscribe(
      res => {
       
        this.patient = res
      }
    )
    this.reportService.getReport(this.appointmentId).subscribe(
      res => {
        this.report = res
      }
    )
    this.reportService.getDrugPrescription(this.report.id).subscribe(
      res => {
        this.drugPrescription = res
      }
    )
    
    console.log(this.patient)
  }
  
  constructor(private reportService: ReportService,
    private appointmentService: AppointmentService,
    private route: ActivatedRoute,
    private patientService: PatientService){
    
  }

  public check(){
    console.log(this.patient)
  }

  showPatient(){

  }
  sendRequests(){

  }
}