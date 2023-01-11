import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VacationRequest } from '../model/vacationRequest';

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  apiHost: string = 'http://localhost:5000/api/Vacation';
  constructor(private http: HttpClient) { }

  getByDoctor(id: number): Observable<VacationRequest[]> {
    console.log(id);
    return this.http.get<VacationRequest[]>(this.apiHost + "/GetAllByDoctor/" + id, {headers: this.headers});
  }

  cancel(id: number): void {
    this.http.put<any>(this.apiHost + "/Cancel/" + id, {headers: this.headers}).subscribe();
  }
}
