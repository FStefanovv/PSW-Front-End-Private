import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { PatientTreatmentDTO } from '../model/patientTreatmentDTO.model';
import { TreatmentService } from '../services/treatment.service';
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
  public loggedDoctorId: string;

  constructor(private treatmentService:TreatmentService, private router:Router) { }

  ngOnInit(): void {
    //this.treatmentsToShow = this.treatments.filter(treatment => treatment.status == "TREATMENT");
    this.loggedDoctorId = localStorage.getItem("idByRole");
    this.treatmentService.getAllPatientOnTreatment(parseInt(this.loggedDoctorId)).subscribe(res=>{
        this.treatments = res;
    });
  }

  discharge(id: any){
    const dischargePatient = this.treatments.find((a) => {return a.id === id});
    this.router.navigate(['patients/discharge'],{queryParams:{id:dischargePatient?.id}})

  }

  update(id:any){
    const updateTherapy = this.treatments.find((a) => {return a.id === id});
    this.router.navigate(['patients/treatments/update'],{queryParams:{id:updateTherapy?.id}});  
  }

  goToCreate(){
    this.router.navigate(['patients/treatments/create']);
  }
}
