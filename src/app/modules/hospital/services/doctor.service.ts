import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor.model';

@Injectable({
    providedIn: 'root'
})
export class DoctorService{
    apiHost: string = 'http://localhost:5000/';//???? nejasno,ispada da moze bilo sta
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    constructor(private http: HttpClient) { }
}