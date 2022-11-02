import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Appointment } from '../model/appointment.model';
import { CreateAppointmentDTO } from '../model/createAppointmentDTO.model';
import { Observable, throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {


 

  apiHost: string = 'http://localhost:5000/';


  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  list!: Appointment[];

  constructor(private http: HttpClient) { }

  getAppointmentsByDoctor(doctor: string): Observable<Appointment[]>{
    const url = `${this.apiHost1}GetAllByDoctor/${doctor}`;

    //this.responseData = this.http.get<Appointment[]>(url, {headers: this.headers}); 
    //console.log(responseData.values[]);

    return this.http.get<Appointment[]>(url, {headers: this.headers});
  }

  createAppointment(appointment: any): Observable<any>{
    console.log(appointment)
    return this.http.post<any>(this.apiHost + 'api/appointment/CreateAppointment', appointment, {headers: this.headers}).pipe(catchError(this.errorHandler))
    
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(() => new Error('test'))
  }

  updateAppointment(appointment: any): Observable<any> {
    return this.http.put<any>(this.apiHost  + appointment.id, appointment, { headers: this.headers });
  }

  refreshList() {
    this.http.get(this.apiHost)
      .toPromise()
      .then(res => this.list = res as Appointment[])
  }

  deleteAppointment(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost  + id, { headers: this.headers });
  }

}
