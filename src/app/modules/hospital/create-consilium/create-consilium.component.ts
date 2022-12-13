import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { InfoForAppointmentsDTO } from '../model/infoForAppointmentsDTO.model';
import { Doctor } from '../model/doctor.model';
import { DoctorShiftDTO } from '../model/doctorsShiftDTO.model';
import { ConsiliumService } from '../services/consilium.service';
import { DoctorService } from '../services/doctor.service';
import { PotentialAppointmentDTO } from '../model/potentialConsiliumAppointment';

@Component({
  selector: 'app-create-consilium',
  templateUrl: './create-consilium.component.html',
  styleUrls: ['./create-consilium.component.css']
})
export class CreateConsiliumComponent implements OnInit {

  public freeAppointments : InfoForAppointmentsDTO = new InfoForAppointmentsDTO();
  public allFreeAppointments 
  public allDoctors : Doctor[] = []
  public selectedDoctors : string[] = []
  public listOfSpecialities = []
  public isClicked : boolean = true;
  public showAppointments : boolean = false;
  selectedItemsList = [];
  topicNull: boolean = false
  startDateNull: boolean = false
  endDateNull: boolean = false
  durationNull: boolean = false
  public potentialAppointments : PotentialAppointmentDTO[] = []


  public specialities = [{id : 0,name : 'Cardiologist',isChecked : false},
                         {id : 1,name : 'Anestesiologist',isChecked: false},
                         {id : 2,name : 'Neurosurgeon',isChecked: false}]
  
  constructor(private doctorService : DoctorService, private router : Router,private consiliumService : ConsiliumService) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe(res => {
      this.allDoctors = res;
    });
  }

  selectedDoctor(id : any) : void{
    let doctor = this.allDoctors.find((d) => { return d.id === id })
    this.selectedDoctors.push(doctor.id);
    let doctorIds = "";
    for(var doc of this.selectedDoctors){
      doctorIds+=(doc+",");
    }
    this.freeAppointments.DoctorIds = doctorIds.substring(0, doctorIds.length - 1);
  } 

  cancelledDoctor(id : any){
    this.selectedDoctors.forEach((value,index)=>{
      if(value === id) this.selectedDoctors.splice(index,1);
    })
    let doctorIds = "";
    for(var doc of this.selectedDoctors){
      doctorIds+=(doc+",");
    }
    this.freeAppointments.DoctorIds = doctorIds.substring(0, doctorIds.length - 1);
  }

  specialitiesIDs() {
    let listOfSpecialities = []
    let specialities = this.specialities;
    listOfSpecialities = specialities.filter(item => item.isChecked).map(item=>item.id);
    this.listOfSpecialities = listOfSpecialities;
    console.log(this.listOfSpecialities)
    let specs = "";
    for(var s of this.listOfSpecialities){
      specs+=(s+",");
    }
    this.freeAppointments.Specialties = specs.substring(0, specs.length - 1);
  }

  private isValidInputTopic(): boolean{
    this.topicNull = false
    return this.freeAppointments.Topic != ''
  }
  private isValidInputStartDate(): boolean{
    this.startDateNull = false
    return this.freeAppointments.StartStr!= ''
  }
  private isValidInputEndDate(): boolean{
    this.endDateNull = false
    return this.freeAppointments.EndStr != ''
  }
  private isValidInputDuration(): boolean{
    this.durationNull = false
    return this.freeAppointments.Duration != ''
  }

  findAppointments(){
    if(!this.isValidInputTopic()) this.topicNull = true
    if(!this.isValidInputStartDate()) this.startDateNull = true
    if(!this.isValidInputEndDate()) this.endDateNull = true
    if(!this.isValidInputDuration()) this.durationNull = true
    if(this.topicNull === true || this.startDateNull === true || this.endDateNull === true || this.durationNull === true ) return
    if(this.isClicked){
      this.consiliumService.sendInfoForFreeAppointments(this.freeAppointments).subscribe(res => {
        this.potentialAppointments = res;
        console.log(this.potentialAppointments)
      },error =>{
        alert("Los zahtev")
      })
    }
    else {
      this.consiliumService.sendInfoForFreeAppointmentsSpecialties(this.freeAppointments).subscribe(res => {
        this.potentialAppointments = res;
        console.log(this.potentialAppointments)
      },error =>{
        alert("Los zahtev")
      })
    }
  }

  selectedAppointment(){
  }
}
