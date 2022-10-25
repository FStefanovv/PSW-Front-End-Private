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

    constructor(private appointmentService: AppointmentService, private router: Router) { }

    public createAppointment(){
        this.appointment.id = "APP6"
        this.appointment.doctorId = "DOC1"
        this.appointment.roomId = 1
        var date = Date.now()
        this.appointment.start = date
        this.appointmentService.createAppointment(this.appointment).subscribe(
            res => {
                alert("Appointment napravljen")
            }
        )
    }
}