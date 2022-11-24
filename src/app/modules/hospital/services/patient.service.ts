import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Patient } from '../model/patient.model';
import { Observable, throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  apiHost: string = 'http://localhost:5000/api/patients';


  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  list!: Patient[];

  constructor(private http: HttpClient) { }

  getAllPatients(): Observable<Patient[]>{
    const url = `${this.apiHost}`;
    return this.http.get<Patient[]>(url, {headers: this.headers});
  }
  
  errorHandler(error: HttpErrorResponse){
    return throwError(() => new Error('test'))
  }

  refreshList() {
    this.http.get(this.apiHost)
      .toPromise()
      .then(res => this.list = res as Patient[])
  }
}
