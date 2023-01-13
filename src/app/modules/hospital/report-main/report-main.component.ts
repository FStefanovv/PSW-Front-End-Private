import { ReportService } from './../services/report.service';
import { ReportDTO } from './../model/reportDTO.model';
import { ActivatedRoute } from '@angular/router';
import { Component } from "@angular/core";
import { Drug } from "../model/drug.model";
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
  public navBarFlag: number = 1
  public symptomsArray: Symptom[]
  public description: string = ""
  public appointmentId: string = ""
  public drugsArray: Drug[]
  public temp: ReportDTO = new ReportDTO()
  public backString4:string=""
  public backString3:string=""
  public backString2:string=""
  public reportId: string = ""

  onSymptomsChoosen(eventData: Symptom[]){
    this.symptomsArray = eventData
    this.stepTwo = true
    this.stepOne = false
    this.navBarFlag = 2
  }
  onDrugsChoosen(e:Drug[]){
    this.drugsArray = e
    this.stepFour = true
    this.stepThree = false
    this.navBarFlag = 4
  }

  descriptionWritten(eventData: {description: string}){
    this.description = eventData.description
    console.log(this.description)
    this.stepThree = true
    this.stepTwo = false
    this.navBarFlag = 3
  }
  backFromStep4(e:{backString4: string})
  {
    this.stepThree= true
    this.stepFour=false
    this.navBarFlag = 3

  }backFromStep3(e:{backString3: string})
  {
    this.stepThree= false
    this.stepTwo=true
    this.navBarFlag = 2

  }
  backFromStep2(e:{backString2: string})
  {
    this.stepTwo= false
    this.stepOne=true
    this.navBarFlag = 1

  }

  constructor(private route: ActivatedRoute,private reportService:ReportService){
    this.route.queryParams.subscribe(params =>{
      this.appointmentId = params.appointmentId
    })
  }

  ngOnInit():void{
      this.reportService.instantiateReport().subscribe(
        res =>{
          console.log(res)
          this.reportId = res
        }
      )
    
  }
  

}