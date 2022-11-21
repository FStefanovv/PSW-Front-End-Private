import { GetDocsAppsUrgentVac } from './../model/getDocsAppsUrgentVac.model';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../model/appointment.model';
import { catchError,  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UrgentVacationService{
  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  sendRequest(request: any): Observable<any>{
    return this.http.post<any>(this.apiHost+'api/Vacation/CreateUrgentRequest',request,{headers: this.headers}).pipe(catchError(this.errorHandler))
  }
  public dto: GetDocsAppsUrgentVac = new GetDocsAppsUrgentVac();
  getAppointmentsForDoctor(id: string,vacationStart: string,vacationEnd: string): Observable<GetDocsAppsUrgentVac[]>{
    return this.http.get<GetDocsAppsUrgentVac[]>(this.apiHost+'api/Doctor/GetDoctorsAppointmentsForVacation/' + id + '/' + vacationStart + '/' + vacationEnd,{headers: this.headers})
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(() => new Error('test'))
  }
}