import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { InfoForAppointmentsDTO } from "../model/infoForAppointmentsDTO.model"
import { PotentialAppointmentDTO } from "../model/potentialConsiliumAppointment"
import { ShowConsiliumsDTO } from "../model/showConsiliumsDTO"


@Injectable({
    providedIn: 'root'
})
export class ConsiliumService {
    apiHost: string = 'http://localhost:5000/api/Consilium/'
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type' : 'application/json'})

    constructor(private http: HttpClient) { }

    sendInfoForFreeAppointments(freeAppointments: any): Observable<PotentialAppointmentDTO[]> {
      return this.http.post<PotentialAppointmentDTO[]>(this.apiHost+'GetPotentialConsiliumTimesDoctors', freeAppointments,{headers: this.headers})
    }

    sendInfoForFreeAppointmentsSpecialties(freeAppointments: any): Observable<PotentialAppointmentDTO[]> {
      return this.http.post<PotentialAppointmentDTO[]>(this.apiHost+'GetPotentialConsiliumTimesSpecialties', freeAppointments,{headers: this.headers})
    }
    
    createConsilium(appointment: any): Observable<PotentialAppointmentDTO>{
      return this.http.post<PotentialAppointmentDTO>(this.apiHost+'CreateConsiliumWithDoctors', appointment, {headers: this.headers})
    }

    getAll() : Observable<ShowConsiliumsDTO[]>{
      return this.http.get<ShowConsiliumsDTO[]>(this.apiHost ,{headers: this.headers} )
    }
  
}