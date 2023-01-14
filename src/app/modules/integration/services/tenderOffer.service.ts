import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tender } from '../models/tender.model';
import {TenderOffer} from '../models/tenderOffer.model';

@Injectable({
  providedIn: 'root'
})
export class TenderOfferService {

  apiHost: string = 'https://localhost:44335/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAll(): Observable<TenderOffer[]> {
    return this.http.get<TenderOffer[]>(this.apiHost + 'api/tenderOffers', { headers: this.headers });
  }
  getByTender(id:number): Observable<TenderOffer[]> {
    return this.http.get<TenderOffer[]>(this.apiHost + 'api/tenderOffers/Tender/'+id, { headers: this.headers });
  }
  notifyWin(tndrOf:TenderOffer): Observable<TenderOffer[]>{
    return this.http.post<TenderOffer[]>(this.apiHost + 'api/tenderOffers/notify-winner',tndrOf, { headers: this.headers });
  }

}
