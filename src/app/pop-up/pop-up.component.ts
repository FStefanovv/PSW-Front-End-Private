import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  error;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.error = data.message
  }

  ngOnInit(): void {
  }

}
