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
        return this.http.post<BloodRequestDTO>(this.apiHost + 'api/bloodRequest',bloodRequestDTO,{headers: this.headers})
    }

    createBloodRecord(createBloodReacord: any): Observable<CreateBloodRecordDTO>{
        return this.http.post<CreateBloodRecordDTO>(this.apiHost+ 'api/createBloodRecord',createBloodReacord, {headers: this.headers}).pipe(catchError(this.errorHandler))
    }

    errorHandler(error: HttpErrorResponse){
        return throwError(() => new Error('test'))
    }
}