import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../model/appointment.model';
import { Observable } from 'rxjs';

const appointments = [
  { id: 'APP1', start: 'aaaa', status: 'scheduled', patient: 'PAT1', room: 'R1', doctor: 'DOC1' },
  { id: 'APP2', start: 'aaaa', status: 'scheduled', patient: 'PAT1', room: 'R1', doctor: 'DOC2' },
  { id: 'APP3', start: 'aaaa', status: 'scheduled', patient: 'PAT1', room: 'R1', doctor: 'DOC3' },
  { id: 'APP4', start: 'aaaa', status: 'scheduled', patient: 'PAT1', room: 'R1', doctor: 'DOC1' },
  { id: 'APP5', start: 'aaaa', status: 'scheduled', patient: 'PAT1', room: 'R1', doctor: 'DOC1' }
];

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  apiHost: string = '';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }


  getAppointmentsByDoctorNoHttp(doctorId: string): Appointment[]{

    return appointments.filter(app => app.doctor === doctorId);
  }

  getAppointmentsByDoctor(): Observable<Appointment[]>{
    //this should have the id value of the doctor 
    const doctor = 'DOC1';
    const url = `${this.apiHost}/api/appointments/getbydoctor/${doctor}`;
    
    return this.http.get<Appointment[]>(url, {headers: this.headers});
  }

  createAppointment(appointment: any): Observable<any>{
      const url = `${this.apiHost}/api/appointments`;
      
      return this.http.post<any>(url, appointment, {headers: this.headers});
  }
}
