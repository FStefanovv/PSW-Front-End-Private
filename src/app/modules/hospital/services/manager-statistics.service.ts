import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableEntry } from '../model/tableEntry.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerStatisticsService{

  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getStats(): Observable<any> {
    return this.http.get<any>(this.apiHost + 'api/Statistics/schedule/graphs', { headers: this.headers });
  }

  getTableStats(): Observable<TableEntry[]> {
    return this.http.get<TableEntry[]>(this.apiHost + 'api/Statistics/schedule/table', { headers: this.headers });
  }
}
