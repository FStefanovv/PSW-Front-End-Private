import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Appointment } from '../model/appointment.model';
import { Doctor } from '../model/doctor.model';
import { Patient } from '../model/patient.model';
import { AppointmentService } from '../services/appointment.service';
import { DoctorService } from '../services/doctor.service';
import { PatientService } from '../services/patient.service';
import { CreateAppointmentDTO } from '../model/createAppointmentDTO.model';
import { CheckDateSpecialtyDTO } from '../model/checkDateSpecialtyDTO.model';
import { DoctorShiftDTO } from '../model/doctorsShiftDTO.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-app-for-other-doc',
  templateUrl: './app-for-other-doc.component.html',
  styleUrls: ['./app-for-other-doc.component.css']
})
export class AppForOtherDocComponent implements OnInit {

  public loggedDoctorId: string;
  public appointments: Appointment[] = [];
  public patients: Patient[] = [];
  public doctors: Doctor[] = [];
  
  public appointmentDate: string;
  public chosenSpecialty: number = -1;
  public chosenDoctorId: number = -1;
  public arrayForShift: string[] = [];

  public chosenSpecialtyDoctors: Doctor[] = [];
  public chosenDoctorObj: Doctor;

  public scheduledAppointment: CreateAppointmentDTO = new CreateAppointmentDTO();
  public checkDateSpecialty: CheckDateSpecialtyDTO = new CheckDateSpecialtyDTO();

  constructor(private appointmentService: AppointmentService, private patientService: PatientService, private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.appointmentDate);
    this.loggedDoctorId = localStorage.getItem('idByRole');
    this.appointmentService.getAllAppointments().subscribe(res => {
      this.appointments = res;
    });
    
    this.appointmentService.getDoctorsPatients(parseInt(this.loggedDoctorId)).subscribe(res => {
      this.patients = res;
    });
    
    this.doctorService.getDoctors().subscribe(res => {
      this.doctors = res;
    });
  }

  onDateOrSpecialtyChange(e: any){
    if(this.chosenSpecialty == -1 || this.appointmentDate == undefined){
      return;
    }
    else{
      this.checkDateSpecialty.appointmentDate = this.appointmentDate;
      this.checkDateSpecialty.specialty = this.chosenSpecialty;
      this.doctorService.getFreeSpecialtyDoctors(this.checkDateSpecialty).subscribe(res =>{
        this.chosenSpecialtyDoctors = res;
      });
    }
  }

  onChosenDoctorChange(e: any){
    this.chosenDoctorObj = this.doctors.find(doctor => doctor.id == this.chosenDoctorId);
    for (let index = this.chosenDoctorObj.startWorkTime; index < this.chosenDoctorObj.endWorkTime; index++) {
      
      if(index == 8 || index == 9){
        this.arrayForShift.push("0" + index.toString() + ":00");
        this.arrayForShift.push("0" + index.toString() + ":20");
        this.arrayForShift.push("0" + index.toString() + ":40");
      }
      else{
        this.arrayForShift.push(index.toString() + ":00");
        this.arrayForShift.push(index.toString() + ":20");
        this.arrayForShift.push(index.toString() + ":40");
      }
    }
    let chosenDoctorsAppointments = this.appointments.filter(appointment => appointment.doctorId == this.chosenDoctorId && appointment.status == 0);
    this.arrayForShift = this.updateShiftSlots(chosenDoctorsAppointments, this.arrayForShift);
  }

  updateShiftSlots(appointments: Appointment[], shift: string[]){
    let appointmentDateFuckingAngular = this.appointmentDate;
    appointments.forEach(function(appointment){
      if(appointment.start.slice(0, 10) == appointmentDateFuckingAngular && shift.includes(appointment.start.slice(11, 16))){
        shift = shift.filter(time => time != appointment.start.slice(11, 16));
      }
    });
    return shift;
  }

  onSchedule(form: NgForm){    
    this.scheduledAppointment.doctorId = this.chosenDoctorId;
    this.scheduledAppointment.patientId = form.value.patientId;
    this.scheduledAppointment.startDate = this.appointmentDate;
    this.scheduledAppointment.startTime = form.value.appointmentTime;
    this.scheduledAppointment.roomId = this.chosenDoctorObj.room.id;
    this.scheduledAppointment.status = "0";
    console.log(this.scheduledAppointment);
    this.appointmentService.createAppointment(this.scheduledAppointment).subscribe(
      res => {
        alert(`Appointment successfully scheduled for doctor ${this.chosenDoctorObj.name + " " + this.chosenDoctorObj.surname}.`);
        this.appointmentDate = "";
        this.chosenSpecialty = -1;
        this.chosenDoctorId = -1;
        form.reset();
      },
      error => {
        alert("There was an error with scheduling the appointment.");
      }
    );
  }
  // public appointments: Appointment[] = [];
  // public patients: Patient[] = [];
  // public doctors: Doctor[] = [];
  // public appointmentDate: string = "";
  // public specialty: number = -1;
  // public currentDoctorId: string = "";
  // public chosenDoctor: string = "";
  // public specialtyDoctors: string[] = [];
  // public appointmentStart: string = "";
  // public freeAppointments: string[] = [];
  // public patient: string = "";
  // public doctorsPatients: string[] = [];
  // public appointment: CreateAppointmentDTO = new CreateAppointmentDTO();
  // public checkDateSpecialty: CheckDateSpecialtyDTO = new CheckDateSpecialtyDTO();
  // public nzmDoc: Doctor;
  // public arrayForShift: string[] = [];
  
  // constructor(private appointmentService: AppointmentService, private patientService: PatientService, private doctorService: DoctorService, private authService: AuthService, private router: Router) { }

  // ngOnInit(): void {
  //   this.appointmentService.getAllAppointments().subscribe(res => {
  //     this.appointments = res;
  //   });
    
  //   this.patientService.getAllPatients().subscribe(res => {
  //     this.patients = res;
  //   });
    
  //   this.doctorService.getDoctors().subscribe(res => {
  //     this.doctors = res;
  //   });
  //   this.currentDoctorId = this.authService.getIdByRole();
  //   this.appointments.filter(appointment => appointment.doctorId == this.currentDoctorId && appointment.status == 1);
  //   this.doctorsPatients = this.updatePatients(this.appointments, this.doctorsPatients);
  // }

  // dateOrSpecialtyChange(e: any){
  //   if(this.specialty == -1){
  //     return;
  //   }
  //   else{
  //     this.checkDateSpecialty.appointmentDate = this.appointmentDate;
  //     this.checkDateSpecialty.specialty = this.specialty;
  //     this.doctorService.getFreeSpecialtyDoctors(this.checkDateSpecialty).subscribe(res =>{
  //       this.specialtyDoctors = res;
  //     });
  //   }
  // }

  // chosenDoctorChange(e: any){
    
  //   let doctorsAppointments = this.appointments.filter(appointment => appointment.doctorId == this.currentDoctorId && appointment.status == 1);
  //   this.nzmDoc = this.doctors.find(doctor => doctor.id == this.chosenDoctor);
  //   console.log(this.nzmDoc);
  //   for (let index = this.nzmDoc?.startWorkTime; index < this.nzmDoc?.endWorkTime; index++) {
      
  //     if(index == 8 || index == 9){
  //       this.arrayForShift.push("0" + index.toString() + ":00");
  //       this.arrayForShift.push("0" + index.toString() + ":20");
  //       this.arrayForShift.push("0" + index.toString() + ":40");
  //     }
  //     else{
  //       this.arrayForShift.push(index.toString() + ":00");
  //       this.arrayForShift.push(index.toString() + ":20");
  //       this.arrayForShift.push(index.toString() + ":40");
  //     }
  //   }
  //   let chosenDoctorsAppointments = this.appointments.filter(appointment => appointment.doctorId == this.chosenDoctor && appointment.status == 0);
  //   this.arrayForShift = this.updateShiftSlots(chosenDoctorsAppointments, this.arrayForShift);
  // }

  // scheduleAppointment(){
  //   if(this.chosenDoctor != "" && this.appointmentDate != "" && this.patient != "" && this.appointmentStart != ""){
  //     this.appointment.doctorId = this.chosenDoctor;
  //     this.appointment.patientId = this.patient;
  //     this.appointment.startDate = this.appointmentDate;
  //     this.appointment.startTime = this.appointmentStart;
  //     this.appointment.status = "0";
  //     this.appointment.roomId = 1;
  //     this.appointmentService.createAppointment(this.appointment).subscribe();
  //   }
  // }

  // updatePatients(appointments: Appointment[], patients: string[]){
  //   console.log("kita");
  //   appointments.forEach(function(appointment){
  //     if(!patients.includes(appointment.patientId)){
  //       patients.push(appointment.patientId);
  //     }
  //   });
  //   return patients;
  // }

  // updateShiftSlots(appointments: Appointment[], shift: string[]){
  //   let appointmentDateFuckingAngular = this.appointmentDate;
  //   appointments.forEach(function(appointment){
  //     if(appointment.start.slice(0, 10) == appointmentDateFuckingAngular && shift.includes(appointment.start.slice(11, 16))){
  //       shift = shift.filter(time => time != appointment.start.slice(11, 16));
  //     }
  //   });
  //   return shift;
  // }
}
