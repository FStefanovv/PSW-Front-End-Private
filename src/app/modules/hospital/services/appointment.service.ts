import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import { Appointment } from '../model/createAppointmentDTO.model';
import { CreateAppointmentDTO } from '../model/createAppointmentDTO.model';
import { Observable, throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

  appointments = [
    { id: 'APP1',doctorId: 'DOC1', patientId: 'PAT1', startDate: "", startTime: "Date.now()",roomId: 1, status: 'Scheduled',appointmentDuration: 20 },
    { id: 'APP2',doctorId: 'DOC1', patientId: 'PAT1', startDate: "", startTime: "Date.now()",roomId: 1, status: 'Scheduled',appointmentDuration: 20 },
    { id: 'APP3',doctorId: 'DOC1', patientId: 'PAT1', startDate: "",startTime: "Date.now()",roomId: 1, status: 'Scheduled',appointmentDuration: 20 }
  ];

  getAppointmentsByDoctorNoHttp(doctorId: string): CreateAppointmentDTO[]{
    // return this.appointments.filter(app => app.doctor === doctorId);
    return this.appointments.filter(app => doctorId === 'DOC1');
  }

  getAppointmentsByDoctor(): Observable<CreateAppointmentDTO[]>{
    //this should have the id value of the doctor 
    const doctor = 'DOC1';
    const url = `${this.apiHost}/api/appointments/getbydoctor/${doctor}`;
    
    return this.http.get<CreateAppointmentDTO[]>(url, {headers: this.headers});
  }

  createAppointment(appointment: any): Observable<any>{
    console.log(appointment)
    return this.http.post<any>(this.apiHost + 'api/appointment/CreateAppointment', appointment, {headers: this.headers}).pipe(catchError(this.errorHandler))
    
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(() => new Error('test'))
  }
}
