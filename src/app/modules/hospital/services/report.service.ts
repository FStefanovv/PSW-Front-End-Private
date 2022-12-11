import { ReportDTO } from './../model/reportDTO.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Symptom } from '../model/symptom.model';
@Injectable({
  providedIn: 'root'
})
export class ReportService{
  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getSymptoms(): Observable<Symptom[]>{
    return this.http.get<Symptom[]>(this.apiHost+'api/Report/GetAllSymptoms',{headers: this.headers})
  }

  getDrugs(): Observable<any[]>{
    return this.http.get<any[]>(this.apiHost+'api/Report/GetAllDrugs',{headers: this.headers})
  }

  createReport(report: any): Observable<any>{
    return this.http.post<any>(this.apiHost + 'api/Report/CreateReport',report,{headers: this.headers})
  }
}