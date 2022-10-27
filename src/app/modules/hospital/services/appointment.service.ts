import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../model/appointment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  apiHost: string = '';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

  appointments = [
    { id: 'APP1', start: 'aaaa', status: 'Scheduled', patient: 'PAT1', room: 'R1', doctor: 'DOC1' },
    { id: 'APP2', start: 'bbbb', status: 'Scheduled', patient: 'PAT1', room: 'R1', doctor: 'DOC2' },
    { id: 'APP3', start: 'cccc', status: 'Scheduled', patient: 'PAT1', room: 'R1', doctor: 'DOC3' },
    { id: 'APP4', start: 'dddd', status: 'Finished', patient: 'PAT2', room: 'R1', doctor: 'DOC1' },
    { id: 'APP5', start: 'eeee', status: 'Scheduled', patient: 'PAT3', room: 'R1', doctor: 'DOC1' },
    { id: 'APP6', start: 'ffff', status: 'Finished', patient: 'PAT2', room: 'R1', doctor: 'DOC1' },
    { id: 'APP7', start: 'gggg', status: 'Scheduled', patient: 'PAT3', room: 'R1', doctor: 'DOC1' }
  ];

  getAppointmentsByDoctorNoHttp(doctorId: string): Appointment[]{
    return this.appointments.filter(app => app.doctor === doctorId);
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
