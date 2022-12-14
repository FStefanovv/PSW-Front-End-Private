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
  patient: boolean=true
  symptom: boolean=true
  description: boolean=true
  drugs: boolean=true

  ngOnInit():void{
    this.route.queryParams.subscribe(params =>{
      this.appointmentId = params.appointmentId
    })
    this.appointmentService.getAppointmentToReschedule(this.appointmentId).subscribe(
      res => {
        this.appointment = res
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
  }
  
  constructor(private reportService: ReportService,private appointmentService: AppointmentService,private route: ActivatedRoute){
    
  }

  check(){
    console.log(this.appointmentId)
    console.log(this.appointment)
    
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
    console.log(this.report)
    console.log(this.drugPrescription)
  }
}