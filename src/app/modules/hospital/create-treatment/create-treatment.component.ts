import { Component, OnInit, ViewChild } from '@angular/core';
import { TreatmentService } from '../services/treatment.service';
import {CreateTreatmentDTO} from '../model/createTreatmentDTO.model' 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-treatment',
  templateUrl: './create-treatment.component.html',
  styleUrls: ['./create-treatment.component.css']
})
export class CreateTreatmentComponent implements OnInit {
  @ViewChild('dischargeForm')
  form: NgForm;

  treatment: CreateTreatmentDTO=new CreateTreatmentDTO()
 listOfRooms: string[]=[]
 listOfBeds:  string[]=[]
 //roomId=this.form.controls['roomId'].value
  constructor(private treatmentService: TreatmentService) { }
 
  ngOnInit(): void {

  this.treatmentService.getRoomsWithFreeBeds().subscribe(res=>{this.listOfRooms=res})
   //roomId=this.form.controls['roomId'].value
   


  }

  freeBed(e:any){
    this.treatmentService.getFreeBeds(this.form.controls['roomId'].value).subscribe(res=>{this.listOfBeds=res})
  }



  onTreatmentCreate(treatment:any){
    
 
  }

}


