import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statistics } from '../model/statistics.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerStatisticsService{

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getStats(): Observable<Statistics[]> {
    return this.http.get<Statistics[]>(this.apiHost + 'api/Statistics/schedule', { headers: this.headers });
  }
}
