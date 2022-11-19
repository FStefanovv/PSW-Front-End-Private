import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientTreatmentDTO } from '../model/patientTreatmentDTO.model';
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

  ngOnInit(): void {
    const queryString= window.location.search
    const urlParams=new URLSearchParams(queryString)
    this.treatmentService.getPatientToDischarged(urlParams.get('id')).subscribe(res =>{
      this.form.setValue({
        treatmentId:res.id,
        patientId: res.patient,
        room: res.room,
        bed: res.bed,
        therapy: res.therapy,
        startDate: res.startDate
      })
    
    })
  }

  
  
  onPatientUpdate(treatment:any){
  let patientUpdateDTO = new PatientTreatmentDTO()
  patientUpdateDTO.id=treatment.id
  patientUpdateDTO.patient=treatment.patient
  patientUpdateDTO.room=treatment.room
  patientUpdateDTO.bed=treatment.bed
  patientUpdateDTO.therapy=treatment.therapy
  patientUpdateDTO.startDate=treatment.startDate
  this.treatmentService.updateTherapy(patientUpdateDTO).subscribe(res=>{alert("Succesfully updated therapy!")})
  this.router.navigate(['patients/treatments'])


  }

}
