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
  public dataSourcePending = new MatTableDataSource<Feedback>();
  public selectedRow = new SelectionModel<Feedback>(false, []);
  public selectedIndex = 0;
  public displayedColumns = ['username', 'text', 'date'];
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

    if (this.selectedRow.selected.length != 0) {

      this.selectedIndex = this.dataSourcePending.data.findIndex((d: Feedback) => d === this.selectedRow.selected[0]);
      this.feedbackService.changeToApproved(this.selectedIndex);

      this.dataSourcePending.data.splice(this.selectedIndex, 1);
      this.dataSourcePending = new MatTableDataSource<Feedback>(this.dataSourcePending.data);
      this.dataSourceApproved.data.push(this.selectedRow.selected[0]);
      this.dataSourceApproved = new MatTableDataSource<Feedback>(this.dataSourceApproved.data);
    }
   
  }
  }

