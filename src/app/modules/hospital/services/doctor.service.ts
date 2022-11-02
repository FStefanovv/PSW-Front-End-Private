import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor.model';
import { DoctorShiftDTO } from '../model/doctorsShiftDTO.model';

@Injectable({
    providedIn: 'root'
})
export class DoctorService{
    apiHost: string = 'http://localhost:5000/';
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    constructor(private http: HttpClient) { }

    getDoctor(id: string): Observable<DoctorShiftDTO> {
        return this.http.get<Doctor>(this.apiHost + 'api/doctor/getDoctorShiftDTO/' + id, {headers: this.headers})
    }
}