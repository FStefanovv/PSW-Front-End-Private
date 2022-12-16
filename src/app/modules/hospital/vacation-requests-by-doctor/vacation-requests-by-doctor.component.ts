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
  requestsForPresentation: VacationRequest[] = [];

  ngOnInit(): void {
    this.vacationService.getByDoctor('DOC1').subscribe( res => {
      this.requests = res;
    });
  }

  cancel(id: number): void {
    this.vacationService.cancel(id);
  }

  /*
  formatForPresentation(): void {
    for(var request of this.requests){
      console.log('uso');
      request.urgency? 'urgnet' : 'non-urgent';
      switch(request.status){
        case '0': request.status = 'Waiting For Approval'; break;
        case '1': request.status = 'Cancelled'; break;
        case '2': request.status = 'Accepted'; break;
        case '3': request.status = 'Disapproved'; break;
      }
      if(request.rejectionReason=="")
        request.rejectionReason = "-";
      console.log(request);
      this.requestsForPresentation.push(request);
    }
  }*/

}
