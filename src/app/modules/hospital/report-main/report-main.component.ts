import { ActivatedRoute } from '@angular/router';
import { Component } from "@angular/core";
import { Drug } from "../model/drug.model";
import { Symptom } from "../model/symptom.model";

@Component({
  selector: 'report-main',
  templateUrl: "./report-main.component.html"
})
export class ReportMain{
  public stepOne: boolean = false
  public stepTwo: boolean = false
  public stepThree: boolean = true
  public stepFour: boolean = false
  public symptomsArray: Symptom[]
  public description: string = ""
  public appointmentId: string = ""
  public drugsArray: Drug[]

  onSymptomsChoosen(eventData: Symptom[]){
    this.symptomsArray = eventData
  }
  onDrugsChoosen(e:Drug[]){
    this.drugsArray = e
  }

  descriptionWritten(eventData: {description: string}){
    this.description = eventData.description
    console.log(this.description)
  }

  constructor(private route: ActivatedRoute){
    this.route.queryParams.subscribe(params =>{
      this.appointmentId = params.appointmentId
    })
  }


}