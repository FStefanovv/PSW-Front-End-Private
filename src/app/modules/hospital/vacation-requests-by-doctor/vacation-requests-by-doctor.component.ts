import { Component, OnInit } from '@angular/core';
import { VacationRequest } from '../model/vacationRequest';
import { VacationService } from '../services/vacation-service.service';



@Component({
  selector: 'app-vacation-requests-by-doctor',
  templateUrl: './vacation-requests-by-doctor.component.html',
  styleUrls: ['./vacation-requests-by-doctor.component.css']
})
export class VacationRequestsByDoctorComponent implements OnInit {

  constructor(private vacationService: VacationService) { }

  requests: VacationRequest[] = [];

  ngOnInit(): void {
    this.vacationService.getByDoctor('DOC1').subscribe( res => {
      this.requests = res;
    });
  }

  cancel(id: number): void {
    this.vacationService.cancel(id);
  }

}
