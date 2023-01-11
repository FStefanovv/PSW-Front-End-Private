import { BloodRequestDTO } from './../model/bloodRequestDTO.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { CreateBloodRecordDTO } from '../model/createBloodRecord.modleDTO';
import { catchError,  } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BloodService {
    apiHost: string = 'http://localhost:5000/'
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type' : 'application/json'})

    constructor(private http: HttpClient) { }

    sendBloodRequest(bloodRequestDTO: any): Observable<BloodRequestDTO> {
      return this.http.post<BloodRequestDTO>(this.apiHost + 'api/Blood/CreateBloodRequest',bloodRequestDTO,{headers: this.headers})
    }

    createBloodRecord(createBloodReacord: any): Observable<CreateBloodRecordDTO>{
        return this.http.post<CreateBloodRecordDTO>(this.apiHost+ 'api/Blood/CreateConsumptionRecord',createBloodReacord, {headers: this.headers}).pipe(catchError(this.errorHandler))
    }

    errorHandler(error: HttpErrorResponse){
        return throwError(() => new Error('test'))
    }

    getByGroupA(): Observable<any>{
        return this.http.get<any>(this.apiHost+'api/Blood/GetByGroupA',{headers:this.headers})
    }

    getByGroupB(): Observable<any>{
        return this.http.get<any>(this.apiHost+'api/Blood/GetByGroupB',{headers:this.headers})
    }

    getByGroupAB(): Observable<any>{
        return this.http.get<any>(this.apiHost+'api/Blood/GetByGroupAB',{headers:this.headers})
    }
    
    getByGroupO(): Observable<any>{
        return this.http.get<any>(this.apiHost+'api/Blood/GetByGroupO',{headers:this.headers})
    }
}
