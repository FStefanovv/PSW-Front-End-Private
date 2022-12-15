import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VacationRequest } from '../model/vacationRequest';

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  //srediti
  apiHost: string = 'http://localhost:5000/api/Vacation';


  constructor(private http: HttpClient) { }

  getByDoctor(id: string): Observable<VacationRequest[]> {
    const url = this.apiHost + '/GetAllByDoctor/' + id;

    return this.http.get<VacationRequest[]>(url, {headers: this.headers});
  }

  cancel(id: number): void {
    const url = this.apiHost + '/Cancel/' + id;

    this.http.put<any>(url, {headers: this.headers}).subscribe();
  }
}
