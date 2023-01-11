import { UrgentVacationDoctorDTO } from './../model/urgentVacationDoctorDTO.model';
import { GetDocsAppsUrgentVac } from './../model/getDocsAppsUrgentVac.model';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../model/appointment.model';
import { catchError,  } from 'rxjs/operators';
import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpInterceptor
} from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UrgentVacationService{
  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' , 'access-control-allow-origin': '*' });

  constructor(private http: HttpClient) { }

  sendRequest(request: any): Observable<any>{
    return this.http.post<any>(this.apiHost+ 'api/Vacation/CreateUrgentRequest', request, { headers: this.headers }).pipe(catchError(this.errorHandler));
  }
  public dto: GetDocsAppsUrgentVac = new GetDocsAppsUrgentVac();
  getAppointmentsForDoctor(id: number, vacationStart: string,vacationEnd: string): Observable<GetDocsAppsUrgentVac[]>{
    return this.http.get<GetDocsAppsUrgentVac[]>(this.apiHost + 'api/Doctor/GetDoctorsAppointmentsForVacation/' + id + '/' + vacationStart + '/' + vacationEnd, { headers: this.headers });
  }

  getDoctors(startDate: string, startTime: string): Observable<UrgentVacationDoctorDTO[]>{
    return this.http.get<UrgentVacationDoctorDTO[]>(this.apiHost + 'api/Doctor/GetDoctorsForRearrange/' + startDate + '/' + startTime, { headers: this.headers });
  }

  changeDoctor(doctorId: string, appointmentId: string):Observable<any>{
    return this.http.post<any>(this.apiHost + 'api/Appointments/ChangeDoctorForAppointment/' + doctorId + '/' + appointmentId, { headers : this.headers }).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    console.log(error.headers)
    return throwError( error)
  }
  

  
}