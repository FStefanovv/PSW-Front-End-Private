import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { InfoForAppointmentsDTO } from '../model/infoForAppointmentsDTO.model';
import { Doctor } from '../model/doctor.model';
import { DoctorShiftDTO } from '../model/doctorsShiftDTO.model';
import { ConsiliumService } from '../services/consilium.service';
import { DoctorService } from '../services/doctor.service';

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
    this.freeAppointments.doctorIds = this.selectedDoctors;
  } 

  cancelledDoctor(id : any){
    this.selectedDoctors.forEach((value,index)=>{
      if(value === id) this.selectedDoctors.splice(index,1);
    })
    this.freeAppointments.doctorIds = this.selectedDoctors;
  }

  specialitiesIDs() {
    let listOfSpecialities = []
    let specialities = this.specialities;
    listOfSpecialities = specialities.filter(item => item.isChecked).map(item=>item.id);
    this.listOfSpecialities = listOfSpecialities;
    this.freeAppointments.specialties = this.listOfSpecialities;
  }

  private isValidInputTopic(): boolean{
    this.topicNull = false
    return this.freeAppointments.topic != ''
  }
  private isValidInputStartDate(): boolean{
    this.startDateNull = false
    return this.freeAppointments.start!= ''
  }
  private isValidInputEndDate(): boolean{
    this.endDateNull = false
    return this.freeAppointments.end != ''
  }
  private isValidInputDuration(): boolean{
    this.durationNull = false
    return this.freeAppointments.duration != ''
  }

  findAppointments(){
    if(!this.isValidInputTopic()) this.topicNull = true
    if(!this.isValidInputStartDate()) this.startDateNull = true
    if(!this.isValidInputEndDate()) this.endDateNull = true
    if(!this.isValidInputDuration()) this.durationNull = true
    if(this.topicNull === true || this.startDateNull === true || this.endDateNull === true || this.durationNull === true ) return
    /*this.consiliumService.sendInfoForFreeAppointments(this.freeAppointments).subscribe(res => {
      alert("Zahtev poslat")
    },error =>{
      alert("Los zahtev")
    })*/
  }

  selectedAppointment(){

  }


}
