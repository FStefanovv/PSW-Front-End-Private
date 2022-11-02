import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../model/appointment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  apiHost: string = 'http://localhost:16177/api/Appointments/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  list!: Appointment[];

  constructor(private http: HttpClient) { }

  getAppointmentsByDoctor(doctor: string): Observable<Appointment[]>{
    const url = `${this.apiHost}GetAllByDoctor/${doctor}`;

    //this.responseData = this.http.get<Appointment[]>(url, {headers: this.headers}); 
    //console.log(responseData.values[]);

    return this.http.get<Appointment[]>(url, {headers: this.headers});
  }

  createAppointment(appointment: any): Observable<any>{
      const url = `${this.apiHost}/api/appointments`;
      
      return this.http.post<any>(url, appointment, {headers: this.headers});
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
