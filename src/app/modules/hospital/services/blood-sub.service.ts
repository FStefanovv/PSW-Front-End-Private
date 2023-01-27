import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, } from 'rxjs/operators';
import { BloodSubscription } from '../model/bloodSubscription.model';
import { BloodSupplies } from '../model/bloodSupplies.model';


@Injectable({
  providedIn: 'root'
})
export class BloodSubscriptionService {

  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  constructor(private http: HttpClient) { }

  getActive(): Observable<BloodSubscription> {
    return this.http.get<BloodSubscription>(this.apiHost + 'api/BloodSubscription', { headers: this.headers });
  }

  ActivateSubscription(sub: BloodSubscription): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/BloodSubscription/Activate', sub, { headers: this.headers });

  }

  Cancel(): Observable<any> {
    return this.http.get<any>(this.apiHost + 'api/BloodSubscription/Cancel', { headers: this.headers });
  }

  GetSupplies(): Observable<BloodSupplies> {
    return this.http.get<BloodSupplies>(this.apiHost + 'api/BloodSubscription/Supplies', { headers: this.headers });
  }

  
}
