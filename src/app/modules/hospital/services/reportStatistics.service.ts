import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReportStatisticsService{
  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getReportCreationDurations(): Observable<any>{
    return this.http.get<any>(this.apiHost + "api/ReportStatistics/GetReportCreationDurations",{headers:this.headers})
  }
  
  getReportAvgNumOfSteps(): Observable<any>{
    return this.http.get<any>(this.apiHost + "api/ReportStatistics/GetReportAvgNumOfSteps",{headers:this.headers})
  }

  getNumOfTimeOnEachStep(): Observable<any>{
    return this.http.get<any>(this.apiHost + "api/ReportStatistics/GetNumOfTimeOnEachStep",{headers:this.headers})
  }

  getDurationAndNumOfStepsInCorellationWithDoctorAge(): Observable<any>{
    return this.http.get<any>(this.apiHost + "api/ReportStatistics/GetDurationAndNumOfStepsInCorellationWithDoctorAge",{headers:this.headers})
  }

  getPercentOfSuccess(): Observable<any>{
    return this.http.get<any>(this.apiHost + "api/ReportStatistics/GetPercentOfSuccess",{headers:this.headers})
  }
}