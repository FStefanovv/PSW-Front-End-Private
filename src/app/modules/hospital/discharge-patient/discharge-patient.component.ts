import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router } from '@angular/router';
import { DischargePatientDTO } from '../model/dischargePatientDTO';
import { TreatmentService } from '../services/treatment.service';
import  jsPDF from 'jspdf';
import  html2canvas from 'html2canvas'

@Component({
  selector: 'app-discharge-patient',
  templateUrl: './discharge-patient.component.html',
  styleUrls: ['./discharge-patient.component.css']
})
export class DischargePatientComponent implements OnInit {
   @ViewChild('dischargeForm')
   form: NgForm;
   treatments: DischargePatientDTO

  constructor(private treatmentService:TreatmentService, private router: Router) { }

  ngOnInit(): void {
    const queryString= window.location.search
    const urlParams=new URLSearchParams(queryString)
    this.treatmentService.getPatientToDischarged(parseInt(urlParams.get('id'))).subscribe(res =>
      {
        this.treatments=res;
      this.form.setValue({
        treatmentId:res.id,
        patientId: res.patientId,
        room: res.roomId,
        bed: res.bedId,
        therapy: res.therapy,
        startDate: res.startDate,
        endDate: res.endDate,
        reason: ""
      })

      
    })
  }
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
    })

    }


  onPatientDischarge(treatments : any){
  let dischargePatientDTO = new DischargePatientDTO( );
  dischargePatientDTO.id=treatments.Id
  console.log(treatments.id)
  dischargePatientDTO.patientId=treatments.patient
  dischargePatientDTO.roomId=treatments.room
  dischargePatientDTO.bedId=treatments.bed
  dischargePatientDTO.therapy=treatments.therapy
  dischargePatientDTO.startDate=treatments.startDate
  dischargePatientDTO.endDate=treatments.endDate
  dischargePatientDTO.reason=treatments.reason

  
  this.treatmentService.dischargePatient(dischargePatientDTO.reason,this.treatments.id).subscribe(res =>{alert("Succesfully discharged patient!")})
  if(confirm('Do you want to generate PDF file?'))
      {
         this.generatePDF()
      }
 this.router.navigate(['patients/treatments'])


 }

}
