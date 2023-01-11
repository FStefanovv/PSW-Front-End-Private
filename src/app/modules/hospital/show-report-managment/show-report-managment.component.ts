import { PatientService } from './../services/patient.service';
import { Patient } from './../model/patient.model';
import { ReportToShow } from './../model/reportToShow.model';
import { ReportService } from './../services/report.service';
import { Appointment } from './../model/appointment.model';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { ActivatedRoute } from '@angular/router';
import { Symptom } from '../model/symptom.model';
import { Drug } from '../model/drug.model';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import jspdf from 'jspdf';
@Component({
  selector: 'show-report-managment',
  templateUrl: './show-report-managment.component.html'
})
export class ShowReportManagment{
  public appointmentId: string
  public report: ReportToShow
  public drugPrescription: any
  public appointment: any
  symptomBool: boolean=false
  drugBool: boolean=false
  symptomList: Array<Symptom>=[]
  drugList: Array<Drug>=[]
  public patient: any
  public patientBool: boolean = false
  public patientId: string 
  public descBool: boolean =false
  public reportId: string



  ngOnInit():void{
    this.route.queryParams.subscribe(params =>{
      this.appointmentId = params.appointmentId
      this.patientId = params.patientId
      this.reportId = params.reportId
    })
    this.appointmentService.getAppointmentToReschedule(this.appointmentId).subscribe(
      res => {
        this.appointment = res
      }
    )
    this.patientService.getPatientForReport(parseInt(this.patientId)).subscribe(
      res => {
       
        this.patient = res
      }
    )
    this.reportService.getReport(this.appointmentId).subscribe(
      res => {
        this.report = res
        this.symptomList=res.symptoms
      }

    )


    this.reportService.getDrugPrescription(this.reportId).subscribe(
      res => {
        this.drugPrescription = res
        this.drugList=res.drugs
      }
      )
    console.log(this.patient)
  }


  radi(){
    console.log("radi li")
    this.generatePDF()
  }

  constructor(private reportService: ReportService,
    private appointmentService: AppointmentService,
    private route: ActivatedRoute,
    private patientService: PatientService){}

  @ViewChild('content',{static:true}) el!: ElementRef<HTMLImageElement>
  
  generatePDF(){
    html2canvas(this.el.nativeElement).then((canvas)=>{
      const imgData = canvas.toDataURL('image/jpeg')

      const pdf = new jsPDF({orientation:'portrait'})

      const imageProps=pdf.getImageProperties(imgData)

      const pdfw = pdf.internal.pageSize.getWidth()

      const pdfh = (imageProps.height*pdfw)/imageProps.width

      pdf.addImage(imgData,'PNG',0,0,pdfw,pdfh)
      
      pdf.save("output.pdf")
      
      window.open(URL.createObjectURL(pdf.output("blob")))
     
      
      
    })
  }
  


 
  


   check(){
    console.log(this.symptomList)
    console.log(this.drugList)
    console.log('radi dugme')

    if(confirm('Do you want to generate PDF file?'))
      {
         this.generatePDF()
      }
   
    
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


  showPatient(){
    console.log('radi li ovo')

  }
  sendRequests(){

  }


}