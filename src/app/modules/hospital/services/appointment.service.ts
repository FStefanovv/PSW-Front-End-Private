import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../model/appointment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

  appointments = [
    { id: 'APP1',doctorId: 'DOC1', patientId: 'PAT1', start: Date.now(),roomId: 1, status: 'Scheduled',appointmentDuration: 20 },
    { id: 'APP2',doctorId: 'DOC1', patientId: 'PAT1', start: Date.now(),roomId: 1, status: 'Scheduled',appointmentDuration: 20 },
    { id: 'APP3',doctorId: 'DOC1', patientId: 'PAT1', start: Date.now(),roomId: 1, status: 'Scheduled',appointmentDuration: 20 }
  ];

  getAppointmentsByDoctorNoHttp(doctorId: string): Appointment[]{
    // return this.appointments.filter(app => app.doctor === doctorId);
    return this.appointments.filter(app => doctorId === 'DOC1');
  }

  getAppointmentsByDoctor(): Observable<Appointment[]>{
    //this should have the id value of the doctor 
    const doctor = 'DOC1';
    const url = `${this.apiHost}/api/appointments/getbydoctor/${doctor}`;
    
    return this.http.get<Appointment[]>(url, {headers: this.headers});
  }

  // createAppointment(appointment: any): Observable<any>{
  //     const url = `${this.apiHost}/api/appointments`;
      
  //     return this.http.post<any>(url, appointment, {headers: this.headers});
  // }

  createAppointment(appointment: any): Observable<any>{
    return this.http.post<any>(this.apiHost + 'api/Appointment', appointment, {headers: this.headers})
  }
  
}
