import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { Feedback } from 'src/app/modules/hospital/model/feedback.model';
import { FeedbackService } from 'src/app/modules/hospital/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  public dataSourceApproved = new MatTableDataSource<Feedback>();
  public dataSourcePending = new MatTableDataSource<Feedback>();
  public displayedColumns = ['id', 'text', 'date'];
  public feedback: Feedback[] = [];

  constructor(private feedbackService: FeedbackService, private router: Router) { }

  ngOnInit(): void {
    this.feedbackService.getAllFeedback().subscribe( res => {
      this.feedback = res;
      this.getPending();
      this.getApproved();
     
    })
  }

  public getPending(): void {
    this.dataSourcePending.data = this.feedback.filter(f => f.approved = false);
  }

  public getApproved(): void {
    this.dataSourceApproved.data = this.feedback.filter(f => f.approved = true);
  }

  public changeToApproved(): void {

    //selektovan kmentar proslediti ovde i promeniti polje approved u true
    //promeniti onda pendingsourcedata i approved sourcedata
    //proslediti taj komenntar u service update
    
  }
  }

