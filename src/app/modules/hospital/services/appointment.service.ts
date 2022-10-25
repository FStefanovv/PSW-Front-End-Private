import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../model/appointment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  apiHost: string = 'http://localhost:5000/api/Appointments/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  data?: Observable<Appointment[]>;

  constructor(private http: HttpClient) { }

  getAppointmentsByDoctor(doctor: string): Observable<Appointment[]>{
    const url = `${this.apiHost}api/Appointments/GetAllByDoctor/${doctor}`;
    this.data = this.http.get<Appointment[]>(url, {headers: this.headers}); 
    console.log(this.data)
    return this.http.get<Appointment[]>(url, {headers: this.headers});
  }

  createAppointment(appointment: any): Observable<any>{
      const url = `${this.apiHost}api/appointments`;
      
      return this.http.post<any>(url, appointment, {headers: this.headers});
  }

  
}
