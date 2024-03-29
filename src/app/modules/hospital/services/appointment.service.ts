import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Appointment } from '../model/appointment.model';
import { CreateAppointmentDTO } from '../model/createAppointmentDTO.model';
import { Observable, throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';
import { RescheduleAppointmentDTO } from '../model/rescheduleAppointmentDTO.model';
import { Patient } from '../model/patient.model';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  apiHost: string = 'http://localhost:5000/api/appointments';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  list!: Appointment[];

  constructor(private http: HttpClient) { }

  getAppointmentsByDoctor(id: number): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.apiHost + "/GetAllByDoctor/" + id, {headers: this.headers});
  }

  createAppointment(appointment: any): Observable<any>{
    console.log(appointment);
    return this.http.post<any>(this.apiHost + '/CreateAppointment', appointment, {headers: this.headers}).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(() => new Error('test'));
  }

  getAppointmentToReschedule(id: any): Observable<RescheduleAppointmentDTO>{
    return this.http.get<any>(this.apiHost + '/GetAppToReschedule/' + id, { headers: this.headers});
  }

  rescheduleAppointment(value : any): Observable<any> {
    console.log(value);
    return this.http.put<any>(this.apiHost + '/' + value.id, value, { headers: this.headers }).pipe(catchError(this.errorHandler));
  }

  refreshList() {
    this.http.get(this.apiHost)
      .toPromise()
      .then(res => this.list = res as Appointment[]);
  }

  deleteAppointment(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost  + '/'+id, { headers: this.headers });
  }

  getAllAppointments(): Observable<Appointment[]>{
    return this.http.get<any>(this.apiHost, { headers: this.headers});
  }

  getDoctorsPatients(id: number): Observable<Patient[]>{
    return this.http.get<any>(this.apiHost + '/GetDoctorsPatients/' + id, { headers : this.headers });
  }
}
