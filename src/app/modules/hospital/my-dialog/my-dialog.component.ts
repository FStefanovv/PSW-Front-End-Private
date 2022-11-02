import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../model/appointment.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {

  appointments: Appointment[] = [];


  constructor(public dialogRef: MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog ){ }

  ngOnInit(): void {
  }



  cancel() {
    this.dialogRef.close(true);


  }
  close() {
    this.dialogRef.close();
  }

}
