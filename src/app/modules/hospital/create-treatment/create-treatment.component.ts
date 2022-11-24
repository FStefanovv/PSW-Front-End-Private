import { Component, OnInit, ViewChild } from '@angular/core';
import { TreatmentService } from '../services/treatment.service';
import {CreateTreatmentDTO} from '../model/createTreatmentDTO.model' 
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-treatment',
  templateUrl: './create-treatment.component.html',
  styleUrls: ['./create-treatment.component.css']
})
export class CreateTreatmentComponent implements OnInit {
  //@ViewChild('dischargeForm')
  //form: FormBuilder;

treatment: CreateTreatmentDTO=new CreateTreatmentDTO()
 listOfRooms: string[]=[]
 listOfBeds:  string[]=[]
 
  constructor(private treatmentService: TreatmentService) { }
 
  ngOnInit(): void {

  this.treatmentService.getRoomsWithFreeBeds().subscribe(res=>{this.listOfRooms=res})

  }

  freeBed(e:any){
    this.treatmentService.getFreeBeds(this.treatment.roomId).subscribe(res=>{this.listOfBeds=res})
  }

  createTreatment(){
    this.treatment.doctorId = "DOC1"
    console.log(this.treatment.bedId)
    this.treatmentService.createTreatment(this.treatment).subscribe(res=>{alert("Sucessfully created treatment")})


  }

}


