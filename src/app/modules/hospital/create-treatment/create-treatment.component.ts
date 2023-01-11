import { Component, OnInit, ViewChild } from '@angular/core';
import { TreatmentService } from '../services/treatment.service';
import {CreateTreatmentDTO} from '../model/createTreatmentDTO.model' 
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms"      
import { AuthService } from '../services/auth.service';

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
  patientIdNull: boolean
  roomIdNull: boolean
  roomIdNull1: boolean
  bedIdNull: boolean
  bedIdNull1: boolean
  reasonNull: boolean
  therapyNull:boolean
  public loggedDoctorId: string;
 
  constructor(private treatmentService: TreatmentService, private authService: AuthService, private router:Router) { }
 
  ngOnInit(): void {

    this.treatmentService.getRoomsWithFreeBeds().subscribe(res=>{this.listOfRooms=res})
    this.loggedDoctorId = this.authService.getIdByRole();
  }

  freeBed(e:any){
    this.treatmentService.getFreeBeds(this.treatment.roomId).subscribe(res=>{this.listOfBeds=res})
  }

  createTreatment(){
    this.treatment.doctorId = this.loggedDoctorId
    console.log(this.treatment.bedId)
    if(!this.isValidInputPatient()) this.patientIdNull=true
    if(!this.isValidInputRoom()) this.roomIdNull=true
    if(!this.isValidInputBed()) this.bedIdNull=true
    if(!this.isValidInputReason()) this.reasonNull=true
    if(!this.isValidInputTherapy()) this.therapyNull=true
    if(!this.isValidInputRoom1()) this.roomIdNull1=true
    if(!this.isValidInputBed1()) this.bedIdNull1=true

    if(this.patientIdNull==true || this.roomIdNull==true || this.bedIdNull==true || this.reasonNull==true || this.therapyNull==true || this.roomIdNull1==true || this.bedIdNull1==true) return
    this.treatmentService.createTreatment(this.treatment).subscribe(res=>{
      alert("Sucessfully created treatment") 
      return this.patientIdNull = false, this.roomIdNull = false,  this.bedIdNull = false,  this.reasonNull = false, this.therapyNull = false, this.bedIdNull1 = false,this.roomIdNull1 = false
      
    })
    this.router.navigate(['patients/treatments'])
  }


  


  private isValidInputPatient(): boolean {
    this.patientIdNull = false
    return this.treatment.patientId != '';
  }
  private isValidInputRoom(): boolean {
    this.roomIdNull = false
    return this.treatment.roomId != '';
  }
  private isValidInputRoom1(): boolean {
    this.roomIdNull1 = false
    return this.treatment.roomId != 'null';
  }
  private isValidInputBed(): boolean {
    this.bedIdNull = false
    return this.treatment.bedId != '';
  }
  private isValidInputBed1(): boolean {
    this.bedIdNull1 = false
    return this.treatment.bedId != 'null';
  }
  private isValidInputReason(): boolean {
    this.reasonNull = false
    return this.treatment.AdmissionReason != '';
  }
  private isValidInputTherapy(): boolean {
    this.therapyNull = false
    return this.treatment.Therapy != '';
  }
}


