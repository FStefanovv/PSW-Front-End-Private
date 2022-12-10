import { Component } from "@angular/core";
import { Symptom } from "../model/symptom.model";

@Component({
  selector: 'report-main',
  templateUrl: "./report-main.component.html"
})
export class ReportMain{
  public stepOne: boolean = true
  public stepTwo: boolean = false
  public stepThree: boolean = false
  public stepFour: boolean = false
  public symptomsArray: Symptom[]
  public description: string = ""

  onSymptomsChoosen(eventData: Symptom[]){
    this.symptomsArray = eventData
  }

  descriptionWritten(eventData: {description: string}){
    this.description = eventData.description
    console.log(this.description)
  }

  constructor(){}


}