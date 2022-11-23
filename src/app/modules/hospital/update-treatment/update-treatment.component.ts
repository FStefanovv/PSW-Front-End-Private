import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DischargePatientDTO } from '../model/dischargePatientDTO';
import { PatientTreatmentDTO } from '../model/patientTreatmentDTO.model';
import { UpdatePatientTreatmentDTO } from '../model/updatePatientTreatmentDTO.model';
import { TreatmentService } from '../services/treatment.service';

@Component({
  selector: 'app-update-treatment',
  templateUrl: './update-treatment.component.html',
  styleUrls: ['./update-treatment.component.css']
})
export class UpdateTreatmentComponent implements OnInit {
  
  constructor(private treatmentService: TreatmentService, private router:Router) {}
  @ViewChild('updateForm')
  form: NgForm
  treatment: DischargePatientDTO

  ngOnInit(): void {
    const queryString= window.location.search
    const urlParams=new URLSearchParams(queryString)
    this.treatmentService.getPatientToDischarged(urlParams.get('id')).subscribe(res =>{
      this.treatment=res;
      this.form.setValue({
        treatmentId:res.id,
        patientId: res.patientId,
        room: res.roomId,
        bed: res.bedId,
        startDate: res.startDate,
        therapy: res.therapy
        
      })
    
    })
  }

  
  
  onPatientUpdate(treatment:any){
  let patientUpdateDTO = new DischargePatientDTO()
  patientUpdateDTO.id=treatment.id
  patientUpdateDTO.patientId=treatment.patient
  patientUpdateDTO.roomId=treatment.room
  patientUpdateDTO.bedId=treatment.bed
  patientUpdateDTO.therapy=treatment.therapy
  console.log(patientUpdateDTO.therapy)
  //patientUpdateDTO.startDate=treatment.startDate
  this.treatmentService.updateTherapy(patientUpdateDTO.therapy,this.treatment.id).subscribe(res=>{alert("Succesfully updated therapy!")})
  //this.router.navigate(['patients/treatments'])


  }

}
