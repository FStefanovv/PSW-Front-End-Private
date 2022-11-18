import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { PatientTreatment } from '../model/patientTreatment.model';
import { TreatmentService } from '../services/treatment.service';
import  jsPDF from 'jspdf';
import  html2canvas from 'html2canvas'

@Component({
  selector: 'app-patient-on-treatment',
  templateUrl: './patient-on-treatment.component.html',
  styleUrls: ['./patient-on-treatment.component.css']
})
export class PatientOnTreatmentComponent implements OnInit {
treatments: PatientTreatment[]=[]
treatmentsToShow: PatientTreatment[]=[]

filterTreatments(){

}
  constructor(private treatmentService:TreatmentService) { }

  ngOnInit(): void {
    this.treatmentService.getAllPatientOnTreatment().subscribe(res=>{
        this.treatments=res
        this.treatmentsToShow=this.treatments
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

  discharge(){
    if(confirm('Do you want to discharge patient?')){
     if(confirm('Do you want to generate pdf file?'))
      {
        this.generatePDF()
      }
      //this.treatmentsToShow=this.treatmentsToShow.filter(res => res.id !== id)
      // window.location.reload();
      //this.treatmentService.dischargePatient(id).subscribe(res => {window.location.reload();})
    }

  }

}
