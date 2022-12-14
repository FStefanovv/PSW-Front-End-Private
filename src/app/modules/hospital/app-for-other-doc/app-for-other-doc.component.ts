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

@Component({
  selector: 'app-app-for-other-doc',
  templateUrl: './app-for-other-doc.component.html',
  styleUrls: ['./app-for-other-doc.component.css']
})
export class AppForOtherDocComponent implements OnInit {

  public appointments: Appointment[] = [];
  public patients: Patient[] = [];
  public doctors: Doctor[] = [];
  public appointmentDate: string = "";
  public specialty: number = -1;
  public currentDoctor: string = "";
  public chosenDoctor: string = "";
  public specialtyDoctors: string[] = [];
  public appointmentStart: string = "";
  public freeAppointments: string[] = [];
  public patient: string = "";
  public doctorsPatients: string[] = [];
  public appointment: CreateAppointmentDTO = new CreateAppointmentDTO();
  public checkDateSpecialty: CheckDateSpecialtyDTO = new CheckDateSpecialtyDTO();
  public nzmDoc: DoctorShiftDTO;
  public arrayForShift: string[] = [];
  
  constructor(private appointmentService: AppointmentService, private patientService: PatientService, private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.appointmentService.getAllAppointments().subscribe(res => {
      this.appointments = res;
    });
    
    this.patientService.getAllPatients().subscribe(res => {
      this.patients = res;
    });
    
    this.doctorService.getDoctors().subscribe(res => {
      this.doctors = res;
    });
  }

  dateOrSpecialtyChange(e: any){
    if(this.specialty == -1){
      return;
    }
    else{
      this.checkDateSpecialty.appointmentDate = this.appointmentDate;
      this.checkDateSpecialty.specialty = this.specialty;
      this.doctorService.getFreeSpecialtyDoctors(this.checkDateSpecialty).subscribe(res =>{
        this.specialtyDoctors = res;
      });
    }
  }

  currentDoctorChange(e: any){
    let doctorsAppointments = this.appointments.filter(appointment => appointment.doctorId == this.currentDoctor && appointment.status == 1);
    this.doctorsPatients = this.updatePatients(doctorsAppointments, this.doctorsPatients);
  }

  chosenDoctorChange(e: any){
    console.log(this.currentDoctor);
    let doctorsAppointments = this.appointments.filter(appointment => appointment.doctorId == this.currentDoctor && appointment.status == 1);
    console.log(doctorsAppointments);
    console.log(this.appointments);
    this.doctorService.getDoctor(this.chosenDoctor).subscribe(res => {
      this.nzmDoc = res
      for (let index = this.nzmDoc?.startWorkTime; index < this.nzmDoc?.endWorkTime; index++) {
          this.arrayForShift.push(index.toString() + ":00")
          this.arrayForShift.push(index.toString() + ":20")
          this.arrayForShift.push(index.toString() + ":40")
      }
    });
    this.arrayForShift = this.updateShiftSlots(doctorsAppointments, this.arrayForShift);
  }

  scheduleAppointment(){
    if(this.chosenDoctor != "" && this.appointmentDate != "" && this.patient != "" && this.appointmentStart != ""){
      this.appointment.doctorId = this.chosenDoctor;
      this.appointment.patientId = this.patient;
      this.appointment.startDate = this.appointmentDate;
      this.appointment.startTime = this.appointmentStart;
      this.appointment.status = "0";
      this.appointment.roomId = 1;
      this.appointmentService.createAppointment(this.appointment).subscribe();
    }
  }
  updatePatients(appointments: Appointment[], patients: string[]){
      appointments.forEach(function(appointment){
        if(!patients.includes(appointment.patientId)){
          patients.push(appointment.patientId);
        }
      });
    return patients;
  }

  updateShiftSlots(appointments: Appointment[], shift: string[]){
    appointments.forEach(function(appointment){
      if(shift.includes(appointment.startTime) && appointment.date == this.appointmentDate){
        this.arrayForShift.splice(shift.indexOf(appointment.startTime), 1);
      }
    });
    return shift;
  }
}
