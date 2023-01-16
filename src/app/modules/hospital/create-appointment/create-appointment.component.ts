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
    templateUrl: './create-appointment.component.html'
  })

export class CreateAppointmentComponent implements OnInit {
    public appointment: CreateAppointmentDTO = new CreateAppointmentDTO();
    public patNull: boolean = false
    public dateNull: boolean = false
    public timeNull: boolean = false
    public dateInPast: boolean = false
    public timeAlreadyAppointed: boolean = false
    public errorMsg: string = ""
    public doctor: DoctorShiftDTO | undefined = undefined
    public arrayForShift: Array<string> = []
    public patientsForDoctor: Array<PatientForApp> = []
    public loggedDoctorId: string;
    public loggedDoctorObj: Doctor;
    constructor(private appointmentService: AppointmentService,private doctorService: DoctorService, private patientService: PatientService,
        private router: Router, private route: ActivatedRoute, private authService: AuthService) { }


    ngOnInit(): void {
        this.loggedDoctorId = this.authService.getIdByRole();
        console.log(this.loggedDoctorId)
        this.route.params.subscribe(() => {
            this.doctorService.getDoctor(parseInt(this.loggedDoctorId)).subscribe(res => {
                this.doctor = res
                for (let index = this.doctor?.startWorkTime; index < this.doctor?.endWorkTime; index++) {
                    this.arrayForShift.push(index.toString() + ":00")
                    this.arrayForShift.push(index.toString() + ":20")
                    this.arrayForShift.push(index.toString() + ":40")
                }
            })
        });
        this.patientService.getPatientForDoctor(parseInt(this.loggedDoctorId)).subscribe(
            res => {
                this.patientsForDoctor = res
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
                alert("Appointment napravljen")
                return this.patNull = false, this.dateNull = false, this.timeNull = false
            },
            error => {
                alert("Appointment date and time is not valid")
            }
        )
    }

    private isValidInputPatient(): boolean {
        this.patNull = false
        return this.appointment.patientId != 0;
    }
    private isValidInputDate(): boolean {
        this.dateNull = false
        return this.appointment?.startDate != '';
    }
    private isValidInputTime(): boolean {
        this.timeNull = false
        return this.appointment?.startTime != '';
    }
}