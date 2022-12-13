import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { InfoForAppointmentsDTO } from "../model/infoForAppointmentsDTO.model"
import { ShowConsiliumsDTO } from "../model/showConsiliumsDTO"


@Injectable({
    providedIn: 'root'
})
export class ConsiliumService {
    apiHost: string = 'http://localhost:5000/'
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type' : 'application/json'})

    constructor(private http: HttpClient) { }

    /*sendInfoForFreeAppointments(freeAppointments: any): Observable<InfoForAppointmentsDTO> {
      return this.http.post<InfoForAppointmentsDTO>(this.apiHost + 'api/Blood/CreateBloodRequest',freeAppointments,{headers: this.headers})
    }*/

    getAll() : Observable<ShowConsiliumsDTO[]> {
      return this.http.get<ShowConsiliumsDTO[]>(this.apiHost + 'api/consilium', {headers: this.headers});
    }
}