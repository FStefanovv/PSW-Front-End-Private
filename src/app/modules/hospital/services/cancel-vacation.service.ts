import { ShowVacation } from './../model/showVacationDTO.model';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CancelVacationService{
  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' , 'access-control-allow-origin': '*' });

  constructor(private http: HttpClient) { }

  getVacations(id:string): Observable<ShowVacation[]>{
    return this.http.get<ShowVacation[]>(this.apiHost + 'api/Vacation/GetAllByDoctor/' + id,{headers: this.headers})
  }

  cancelVacation(id: number): Observable<any>{
    return this.http.delete<any>(this.apiHost + 'api/Vacation/DeleteVacationRequest/' + id,{headers: this.headers})
  }
}