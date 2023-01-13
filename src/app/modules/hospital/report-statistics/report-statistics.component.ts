import { Duration } from 'moment';
import { ReportStepThree } from './../report-step-three/report-step-three.component';
import { ReportStepOne } from './../report-step-one/report-step-one.component';
import { NextBackButtonProportion } from './../model/NextBackButtonProportionDTO.model';
import { DurationAndNumOfStepsAge } from './../model/durationAndNumOfStepsAge.model';
import { NumOfTimeOnEachStep } from './../model/NumOfTimeOnEachStepDTO';
import { ReportCreationDuration } from './../model/ReportCreationDurationDTO';
import { Component } from "@angular/core";
import { ReportStatisticsService } from "../services/reportStatistics.service";
import * as Chart from 'chart.js';

@Component({
  selector: 'report-statistics',
  templateUrl: './report-statistics.component.html',
})
export class ReportStatistics{
  public reportCreationDurationList: Array<ReportCreationDuration> = []
  public avgNumOfSteps:number = 0 
  public numOfTimeOnEachStepList: Array<NumOfTimeOnEachStep> = []
  public durationAndNumOfStepsAgeList: Array<DurationAndNumOfStepsAge> = []
  public percentOfSuccessList: Array<NextBackButtonProportion> = []
  public stepOne: number = 0
  public stepTwo: number = 0
  public stepThree: number = 0
  public stepFour: number = 0
  public twentyToFourty: number=0
  public fourtyToSixty: number=0
  public overSixty: number=0
  public fourToEight: number = 0
  public eightToTwelve: number = 0
  public twelweToSixteen: number = 0
  public someNumber: number = 0

  public NumOfTimeOnEachStep:Chart;
  public GetDurationAndNumOfStepsInCorellationWithDoctorAge:Chart;

  constructor(private reportStatistics: ReportStatisticsService){

  }

  ngOnInit(): void{
    this.reportStatistics.getReportCreationDurations().subscribe(res=>{
      this.reportCreationDurationList = res
      console.log(res)
    })
    this.reportStatistics.getReportAvgNumOfSteps().subscribe(res=>{
      this.avgNumOfSteps = res
      console.log(res)
    })
    this.reportStatistics.getNumOfTimeOnEachStep().subscribe(res=>{
      this.numOfTimeOnEachStepList = res
      let stepOne= 0
      let stepTwo = 0 
      let stepThree = 0
      let stepFour = 0
      res.forEach(report => {
        stepOne = stepOne + report.step0
        stepTwo = stepTwo + report.step1
        stepThree = stepThree + report.step2
        stepFour = stepFour + report.step3
      })
      this.stepOne = stepOne
      this.stepTwo = stepTwo
      this.stepThree = stepThree
      this.stepFour = stepFour
      this.NumOfTimeOnEachStep = this.constructNumOfTimeOnEachStep(stepOne,stepTwo,stepThree,stepFour)
      console.log(res)
    })
    this.reportStatistics.getDurationAndNumOfStepsInCorellationWithDoctorAge().subscribe(res =>{
      this.durationAndNumOfStepsAgeList = res
      let age = 0
      let yOsa = 1
      let twentyToFourty = 0
      let fourtyToSixty = 0
      let overSixty = 0
      res.forEach(report => {
        if(report.age>20 && report.age<40){
          twentyToFourty= twentyToFourty + (report.numberOfSteps * report.duration)
        }else if(report.age>40 && report.age<60){
          fourtyToSixty= twentyToFourty + (report.numberOfSteps * report.duration)
        }else{
          overSixty= overSixty + (report.numberOfSteps * report.duration)
        }
      });
      this.twentyToFourty = twentyToFourty
      this.fourtyToSixty = fourtyToSixty
      this.overSixty = overSixty
      this.GetDurationAndNumOfStepsInCorellationWithDoctorAge = this.construcGetDurationAndNumOfStepsInCorellationWithDoctorAge(twentyToFourty,fourtyToSixty,overSixty)
      console.log(res)
    })
    this.reportStatistics.getPercentOfSuccess().subscribe(res=>{
      this.percentOfSuccessList = res
      let fourToEight = 0
      let eightToTwelwe = 0
      let twelweToSixteen = 0
      res.forEach(report =>{
        let numOfSteps = report.pressNext + report.pressBack
        if(numOfSteps>2 && numOfSteps<9){
          fourToEight = report.percentOfSuccess
        }else if(numOfSteps>8  && numOfSteps<13){
          eightToTwelwe = report.percentOfSuccess
        }else{
          twelweToSixteen = report.percentOfSuccess
        }
      })
      this.fourToEight = fourToEight
      this.eightToTwelve = eightToTwelwe
      this.twelweToSixteen = twelweToSixteen
      this.construcGetPercentOfSuccess(fourToEight,eightToTwelwe,twelweToSixteen)
      console.log(res)
    })



    
  }

  numOfSteps(numOfTimeOnEachStepList: Array<NumOfTimeOnEachStep>){
    let stepOne= 0
    let stepTwo = 0 
    let stepThree = 0
    let stepFour = 0
    numOfTimeOnEachStepList.forEach(report => {
      stepOne = stepOne + report.step0
      stepTwo = stepTwo + report.step1
      stepThree = stepThree + report.step2
      stepFour = stepFour + report.step3
    })
  }

  constructNumOfTimeOnEachStep(stepOne:number,stepTwo:number,stepThree:number,stepFour:number){
    return new Chart("numOfTimeOnEachStep",{
      type: 'bar',
      data: {
        labels: ['0', '1', '2', '3'],
        datasets: [{
          data: [stepOne,stepTwo,stepThree,stepFour],
          backgroundColor:[
            '#86eba1',
            '#86eba1',
            '#86eba1',
            '#86eba1',
            '#86eba1',
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 2.5,
          hoverBorderColor: '#000',
        }]
      },
      options:{
        legend:{
          display: false
        },
        scales:{
          yAxes:[{
            ticks:{
              beginAtZero: true
            }
          }]
        }
      }
    })
  }

  construcGetDurationAndNumOfStepsInCorellationWithDoctorAge(twentyToFourty: number,fourtyToSixty: number,overSixty: number){
    return new Chart("getDurationAndNumOfStepsInCorellationWithDoctorAge",{
      type: 'bar',
      data: {
        labels: ['20-40', '40-60', '<60'],
        datasets: [{
          data: [twentyToFourty,fourtyToSixty,overSixty],
          backgroundColor:[
            '#86eba1',
            '#86eba1',
            '#86eba1',
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 2.5,
          hoverBorderColor: '#000',
        }]
      },
      options:{
        legend:{
          display: false
        },
        scales:{
          yAxes:[{
            ticks:{
              beginAtZero: true
            }
          }]
        }
      }
    })
  }

  construcGetPercentOfSuccess(fourToEight:number,eightToTwelwe:number,twelweToSixteen:number){
    return new Chart("getSteps",{
      type: 'bar',
      data: {
        labels: ['4-8', '8-12', '12-16'],
        datasets: [{
          data: [fourToEight,eightToTwelwe,twelweToSixteen],
          backgroundColor:[
            '#86eba1',
            '#86eba1',
            '#86eba1',
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 2.5,
          hoverBorderColor: '#000',
        }]
      },
      options:{
        legend:{
          display: false
        },
        scales:{
          yAxes:[{
            ticks:{
              beginAtZero: true
            }
          }]
        }
      }
    })
  }
}