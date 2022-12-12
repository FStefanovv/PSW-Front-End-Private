import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {BB, BloodBank, ReportDTO} from '../models/blood-bank';

@Injectable({
  providedIn: 'root'
})
export class BloodBankService {

  baseUrl1='https://localhost:44335/api/BloodBank'
  baseUrl2='https://localhost:44335/api/Report'

  constructor(private http:HttpClient) { }




  registerNewbBoodBank(bb: BloodBank):Observable<BloodBank>{
    return this.http.post<BloodBank>(this.baseUrl1,bb);

  }
  getAll():Observable<BB[]>{
    return this.http.get<BB[]>(this.baseUrl1);


  }
  configureReport(r:ReportDTO):Observable<any>{
    return this.http.post(this.baseUrl2,r);

  }
}
