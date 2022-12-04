import { Component } from "@angular/core";

@Component({
  selector: 'report-main',
  templateUrl: "./report-main.component.html"
})
export class ReportMain{
  public stepOne: boolean = true
  public stepTwo: boolean = false
  public stepThree: boolean = false
  public stepFour: boolean = false

  constructor(){}


}