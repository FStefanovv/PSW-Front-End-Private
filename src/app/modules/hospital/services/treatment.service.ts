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

  getAllPatientOnTreatment(id: number): Observable<PatientTreatmentDTO[]>{
    return this.http.get<PatientTreatmentDTO[]>(this.apiHost + 'api/InpatientTreatment/GetAllByDoctor/' + id, { headers: this.headers });
  }

  getPatientOnTreatmentById(id: number): Observable<PatientTreatmentDTO>{  
    return this.http.get<PatientTreatmentDTO>(this.apiHost + 'api/InpatientTreatment/GetById/' + id, { headers: this.headers });
  }

  getPatientToDischarged (id: number): Observable<DischargePatientDTO>{  
    return this.http.get<any>(this.apiHost + 'api/InpatientTreatment/GetRecordForDishcarged/' + id, { headers: this.headers });
  }

   updateTherapy(therapy: any, id: any): Observable<any>{
    return this.http.put<any>(this.apiHost + 'api/InpatientTreatment/UpdateTherapy/' + id + '/' + therapy, { headers: this.headers });
  }

  dischargePatient(reason: any, id: any): Observable<any> {
    return this.http.put<any>(this.apiHost  + 'api/InpatientTreatment/Discharge/' + id + '/' + reason, { headers: this.headers });
  }

  getRoomsWithFreeBeds(): Observable<any[]> {
    return this.http.get<any>(this.apiHost + 'api/Rooms/GetAllWithFreeBeds', { headers: this.headers });
  }
   
  getFreeBeds(roomId:any): Observable<any[]>{
    return this.http.get<any> (this.apiHost + 'api/Equipment/GetAvailableRoomBeds/' + roomId, { headers: this.headers });
  }

  createTreatment(treatment: any ): Observable<any>{
    return this.http.post<any>(this.apiHost + 'api/InpatientTreatment/CreateRequest', treatment, { headers: this.headers });
  }
}
