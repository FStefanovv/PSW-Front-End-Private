import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/modules/hospital/model/appointment.model';
import { AppointmentService } from 'src/app/modules/hospital/services/appointment.service';

@Component({
    selector: 'app-create-appointments',
    templateUrl: './create-appointment.component.html'
  })
export class CreateAppointmentComponent {
    public appointment: Appointment = new Appointment();
    public patNull: boolean = false
    public dateNull: boolean = false
    public timeNull: boolean = false
    public dateInPast: boolean = false
    public timeAlreadyAppointed: boolean = false
    public errorMsg: string = ""
    constructor(private appointmentService: AppointmentService, private router: Router) { }



    public createAppointment(){
        this.appointment.doctorId = "DOC1"
        this.appointment.roomId = 1
        
        //if(this.patNull == true || this.dateNull == true || this.timeNull == true) return

        this.appointmentService.createAppointment(this.appointment).subscribe(
            res => {
                alert("Appointment napravljen")
                return this.patNull = false, this.dateNull = true, this.timeNull = false
            },
            error => {
                if (!this.isValidInputPatient()) this.patNull = true
                if (!this.isValidInputDate()) this.dateNull = true
                if (!this.isValidInputTime()) this.timeNull = true
            }
            
        )
    }

    private isValidInputPatient(): boolean {
        this.patNull = false
        return this.appointment?.patientId != '';
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