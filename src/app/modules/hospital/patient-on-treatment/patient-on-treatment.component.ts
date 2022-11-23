import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { PatientTreatmentDTO } from '../model/patientTreatmentDTO.model';
import { TreatmentService } from '../services/treatment.service';
import  jsPDF from 'jspdf';
import  html2canvas from 'html2canvas'
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-on-treatment',
  templateUrl: './patient-on-treatment.component.html',
  styleUrls: ['./patient-on-treatment.component.css']
})
export class PatientOnTreatmentComponent implements OnInit {
treatments: PatientTreatmentDTO[]=[]
treatmentsToShow: PatientTreatmentDTO[]=[]
treatmentStatus: string="TREATMENT";


 
  constructor(private treatmentService:TreatmentService, private router:Router) { }

  ngOnInit(): void {
    //this.treatmentsToShow = this.treatments.filter(treatment => treatment.status == "TREATMENT");
    this.treatmentService.getAllPatientOnTreatment().subscribe(res=>{
        this.treatments=res
        
    })
  }


  discharge(id: any){
    const dischargePatient = this.treatments.find((a) => {return a.id === id});
    this.router.navigate(['patients/discharge'],{queryParams:{id:dischargePatient?.id}})

  }
  update(id:any){
    const updateTherapy = this.treatments.find((a) => {return a.id === id});
    this.router.navigate(['patients/treatments/update'],{queryParams:{id:updateTherapy?.id}})

    
  }

}
