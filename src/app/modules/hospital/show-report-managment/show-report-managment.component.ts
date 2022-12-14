import { ReportToShow } from './../model/reportToShow.model';
import { ReportService } from './../services/report.service';
import { Appointment } from './../model/appointment.model';
import { Component } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { ActivatedRoute } from '@angular/router';
import { Symptom } from '../model/symptom.model';
import { Drug } from '../model/drug.model';
@Component({
  selector: 'show-report-managment',
  templateUrl: './show-report-managment.component.html'
})
export class ShowReportManagment{
  public appointmentId: string
  public report: ReportToShow
  public drugPrescription: any
  public appointment: any
  description: string
  patient: boolean=false
  symptomBool: boolean=false
  drugBool: boolean=false
  
  symptomList: Array<Symptom>=[]
  drugList: Array<Drug>=[]
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
    

      this.reportService.getReport(this.appointmentId).subscribe(
        res => {
          this.report = res
          this.symptomList=res.symptoms
          
        }

      )
    
    
      this.reportService.getDrugPrescription(this.report.id).subscribe(
        res => {
          this.drugPrescription = res
          this.drugList=res.drugs
  
        }
      )
      
    // this.reportService.getDrugPrescription(this.report.id).subscribe(
    //   res => {
    //     this.drugPrescription = res
    //   }
    // )
  }
  
  constructor(private reportService: ReportService,private appointmentService: AppointmentService,private route: ActivatedRoute){ }


  

  check(){
    console.log(this.symptomList)
    console.log(this.drugList)
    
    // if(this.symptomBool){

    // this.reportService.getReport(this.appointmentId).subscribe(
    //   res => {
    //     this.report = res
    //     this.symptomList=res.symptoms
    //   }
    // )
    // }
    // if(this.drugBool){
    // this.reportService.getDrugPrescription(this.report.id).subscribe(
    //   res => {
    //     this.drugPrescription = res
    //     this.drugList=res.drugs

    //   }
    // )
    // }
    // console.log(this.report)
    // console.log(this.drugPrescription)
  }
}