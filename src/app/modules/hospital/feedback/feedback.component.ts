import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { Feedback } from 'src/app/modules/hospital/model/feedback.model';
import { FeedbackService } from 'src/app/modules/hospital/services/feedback.service';
import { MatButtonModule } from '@angular/material/button';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  public dataSourceApproved = new MatTableDataSource<Feedback>();
  public approvedFeedback: Feedback[] = [];
  public dataSourcePending = new MatTableDataSource<Feedback>();
  public pendingFeedback: Feedback[] = [];
  public displayedColumns = ['username', 'text', 'date'];
  public feedback: Feedback[] = [];

  public selectedRowPending = new SelectionModel<Feedback>(false, []);
  public selectedRowApproved = new SelectionModel<Feedback>(false, []);
  public selectedIndex = 0;
  
  constructor(private feedbackService: FeedbackService, private router: Router) { }

  ngOnInit(): void {
    this.feedbackService.getAllFeedback().subscribe( res => {
      this.feedback = res;
      this.approvedFeedback = this.feedback.filter(f => f.approved === true);
      this.pendingFeedback = this.feedback.filter(f => f.approved === false);
      this.dataSourcePending.data = this.pendingFeedback;
      this.dataSourceApproved.data = this.approvedFeedback;
     
    })
  }

  public changeToApproved(): void {

    if (this.selectedRowPending.selected.length != 0 ) {
      var feedback = this.selectedRowPending.selected[0];
      this.selectedIndex = this.pendingFeedback.findIndex((d: Feedback) => d === feedback);

      if (feedback.approved == false) {

        this.feedbackService.changeApproval(feedback.id).subscribe();
        this.approvedFeedback.push(feedback);
        this.pendingFeedback.splice(this.selectedIndex, 1);

        this.dataSourcePending = new MatTableDataSource<Feedback>(this.pendingFeedback);
        this.dataSourceApproved = new MatTableDataSource<Feedback>(this.approvedFeedback);
        this.selectedRowPending.selected.length = 0;
      }
     
    }
   
  }

  public changeToPending(): void {
    
    if (this.selectedRowApproved.selected.length != 0) {
      var feedback = this.selectedRowApproved.selected[0];
      this.selectedIndex = this.approvedFeedback.findIndex((d: Feedback) => d === feedback);
      if (feedback.approved == true) {
        this.feedbackService.changeApproval(feedback.id).subscribe();
        this.pendingFeedback.push(feedback);
        this.approvedFeedback.splice(this.selectedIndex, 1);

        this.dataSourcePending = new MatTableDataSource<Feedback>(this.pendingFeedback);
        this.dataSourceApproved = new MatTableDataSource<Feedback>(this.approvedFeedback);
        this.selectedRowApproved.selected.length = 0;
      }

    }





  }


  }

