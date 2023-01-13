import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckDateSpecialtyDTO } from '../model/checkDateSpecialtyDTO.model';
import { Doctor } from '../model/doctor.model';
import { DoctorShiftDTO } from '../model/doctorsShiftDTO.model';
import { PatientHealthMeasurements } from '../model/patientHealthMeasurements.model';

@Injectable({
    providedIn: 'root'
})
export class DoctorService{
    apiHost: string = 'http://localhost:5000/';
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    constructor(private http: HttpClient) { }

    getDoctor(id: number): Observable<DoctorShiftDTO> {
        return this.http.get<Doctor>(this.apiHost + 'api/doctor/getDoctorShiftDTO/' + id, {headers: this.headers})
    }

    getDoctorById(id: number): Observable<Doctor> {
        return this.http.get<Doctor>(this.apiHost + "api/doctor/" + id, { headers: this.headers });
    }

    getDoctors(): Observable<Doctor[]> {
        return this.http.get<Doctor[]>(this.apiHost + 'api/doctor', {headers: this.headers});
    }

    getFreeSpecialtyDoctors(check: CheckDateSpecialtyDTO): Observable<Doctor[]>{
        return this.http.post<Doctor[]>(this.apiHost + 'api/doctor/getFreeSpecialtyDoctors', check, {headers: this.headers});
    }

    getSpecialtyDoctors(specialty: number): Observable<string[]>{
        return this.http.get<string[]>(this.apiHost + 'api/doctor/getSpecialtyDoctors/' + specialty, {headers: this.headers});
    }

    getPatientHealthMeasurements(dto: any): Observable<PatientHealthMeasurements[]>{
        return this.http.post<PatientHealthMeasurements[]>(this.apiHost + 'api/PatientHealthMeasurements/getPatientHealthMeasurements', dto, { headers: this.headers });
    }
}