import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../model/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.apiHost + 'api/feedback', { headers: this.headers });
  }

  acceptFeedback(feedback: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/feedback/verify/' + feedback.id, feedback, { headers: this.headers });
  }
}
