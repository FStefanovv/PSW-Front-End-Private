import { PatientService } from './../services/patient.service';
import { Patient } from './../model/patient.model';
import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { CreateAppointmentDTO } from 'src/app/modules/hospital/model/createAppointmentDTO.model';
import { Doctor } from 'src/app/modules/hospital/model/doctor.model';
import { AppointmentService } from 'src/app/modules/hospital/services/appointment.service';
import { DoctorService } from '../services/doctor.service';
import { DoctorShiftDTO } from '../model/doctorsShiftDTO.model';
import { PatientForApp } from '../model/patientForApp.model';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-create-appointments',
    templateUrl: './create-appointment.component.html',
    styleUrls: ['./create-appointment.component.css']
  })

export class CreateAppointmentComponent implements OnInit {
    
    public loggedDoctorId: string;
    public loggedDoctorObj: Doctor;
    public doctorShift: DoctorShiftDTO | undefined = undefined;
    public arrayForShift: string[] = [];
    public patientsForDoctor: Patient[] = [];
    public patNull: boolean = false
    public dateNull: boolean = false
    public timeNull: boolean = false
    public appointment: CreateAppointmentDTO = new CreateAppointmentDTO();
    
    public patientValid: boolean = false;
    public dateValid: boolean = false;
    public canSchedule: boolean = false;

    constructor(private appointmentService: AppointmentService,private doctorService: DoctorService, private patientService: PatientService,
        private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

    ngOnInit(): void {
        console.log(this.appointment.patientId)
        this.loggedDoctorId = this.authService.getIdByRole();
        this.route.params.subscribe(() => {
            this.doctorService.getDoctor(parseInt(this.loggedDoctorId)).subscribe(res => {
                this.doctorShift = res;
                for (let index = this.doctorShift?.startWorkTime; index < this.doctorShift?.endWorkTime; index++) {
                    this.arrayForShift.push(index.toString() + ":00");
                    this.arrayForShift.push(index.toString() + ":20");
                    this.arrayForShift.push(index.toString() + ":40");
                }
            })
        });
        this.patientService.getAllPatients().subscribe(
            res => {
                this.patientsForDoctor = res;
            }
        );
        this.doctorService.getDoctorById(parseInt(this.loggedDoctorId)).subscribe(
            res => {
                this.loggedDoctorObj = res;
            }
        );
    }

    public createAppointment(){
        this.appointment.doctorId = this.loggedDoctorObj.id;
        this.appointment.roomId = this.loggedDoctorObj.room.id;
        if (!this.isValidInputPatient()) this.patNull = true
        if (!this.isValidInputDate()) this.dateNull = true
        if (!this.isValidInputTime()) this.timeNull = true
        if(this.patNull == true || this.dateNull == true || this.timeNull == true) return
        this.appointmentService.createAppointment(this.appointment).subscribe(
            res => {
                alert("Appointment created")
                this.router.navigate(['appointments-by-doctor'])
                return this.patNull = false, this.dateNull = false, this.timeNull = false
            },
            error => {
                console.log(this.patNull)
                console.log(this.dateNull)
                console.log(this.timeNull)
                alert("Appointment date and time is not valid")
            }
        )
    }

    private isValidInputPatient(): boolean {
        console.log(this.appointment.patientId)
        this.patNull = false
        return this.appointment.patientId != undefined;
    }
    private isValidInputDate(): boolean {
        this.dateNull = false
        return this.appointment?.startDate != '';
    }
    private isValidInputTime(): boolean{
        this.timeNull =false
        return this.appointment.startTime != ''
    }

    public dateInPast(checkDate: string){
        var today = new Date();
        var check = new Date(checkDate);
        if(today.setHours(0, 0, 0, 0) >= check.setHours(0, 0, 0, 0)){
            this.dateValid = true;
            if(this.patientValid){
                this.canSchedule = true;
            }
        }
        else{
            this.dateValid = false;
            this.canSchedule = false;
        }
    }


    back(){
        this.router.navigate(['appointments-by-doctor'])
    }
}