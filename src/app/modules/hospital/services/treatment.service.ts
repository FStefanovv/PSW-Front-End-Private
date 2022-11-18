import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientTreatment } from '../model/patientTreatment.model';


@Injectable({
  providedIn: 'root'
})
export class TreatmentService {



  apiHost: string = 'http://localhost:5000/';


  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

  getAllPatientOnTreatment(): Observable<PatientTreatment[]>{

    return this.http.get<PatientTreatment[]>(this.apiHost + 'api/', {headers: this.headers});
  
  }
  getPatientOnTreatmentById(id:any): Observable<PatientTreatment>{
    
    return this.http.get<PatientTreatment>(this.apiHost + 'api/' + '/' + id ,{headers: this.headers})
  
  }

   updateTherapy( treatment: any ): Observable<any>{
    
    return this.http.put<any>(this.apiHost + 'api/', treatment,{headers: this.headers} )
  }

  dischargePatient(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost  + 'api/'+id, { headers: this.headers });
  }
}
