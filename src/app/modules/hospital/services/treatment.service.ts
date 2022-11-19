import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DischargePatientDTO } from '../model/dischargePatientDTO';
import { PatientTreatmentDTO } from '../model/patientTreatmentDTO.model';




@Injectable({
  providedIn: 'root'
})
export class TreatmentService {


  

  apiHost: string = 'http://localhost:5000/';


  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

  getAllPatientOnTreatment(): Observable<PatientTreatmentDTO[]>{

    return this.http.get<PatientTreatmentDTO[]>(this.apiHost + 'api/', {headers: this.headers});
  
  }
  getPatientOnTreatmentById(id:any): Observable<PatientTreatmentDTO>{
    
    return this.http.get<PatientTreatmentDTO>(this.apiHost + 'api/' + '/' + id ,{headers: this.headers})
  
  }
  getPatientToDischarged (id:any): Observable<DischargePatientDTO>{
    
    return this.http.get<any>(this.apiHost + 'api/' + '/' + id ,{headers: this.headers})
  
  }

   updateTherapy( treatment: any ): Observable<any>{
    
    return this.http.put<any>(this.apiHost + 'api/', treatment,{headers: this.headers} )
  }

  dischargePatient(treatment: any): Observable<any> {
    return this.http.put<any>(this.apiHost  + 'api/' + treatment.id, treatment, { headers: this.headers });
  }
}
