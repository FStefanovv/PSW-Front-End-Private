import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BloodBank} from '../models/blood-bank';

@Injectable({
  providedIn: 'root'
})
export class BloodBankService {

  baseUrl='http://localhost:45488/api/BloodBank'

  constructor(private http:HttpClient) { }

  registerNewbBoodBank(bb: BloodBank):Observable<BloodBank>{
     return this.http.post<BloodBank>(this.baseUrl,bb);

  }
}
