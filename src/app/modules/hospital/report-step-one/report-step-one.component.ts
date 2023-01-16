import { Symptom } from './../model/symptom.model';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ReportService } from './../services/report.service';
import { Component, EventEmitter, Output, Input } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'report-step-one',
  templateUrl: './report-step-one.component.html'
})
export class ReportStepOne{
  @Output() symptomsToReturn = new EventEmitter<Symptom[]>()
  @Input() reportId: string = ""
  @Input() checkedSymtpoms: Array<Symptom> = []
  form: FormGroup
  public symptomsList: Array<Symptom> = []


  constructor(private reportService: ReportService,private router:Router) {
    
  }

  reutrnBool(symptom: Symptom){
    let flag: boolean = false
    this.checkedSymtpoms.forEach(checked =>{
      if(checked.name == symptom.name){
        flag = true
      }
    })
    return flag
  }

  ngOnInit(): void{
    this.reportService.getSymptoms().subscribe(
      res => {
        if(this.checkedSymtpoms == null){
          this.symptomsList = res
        }else{
          console.log(this.checkedSymtpoms)
          res.forEach(symptom =>{
            symptom.isChecked = this.reutrnBool(symptom)
            console.log(symptom)
            this.symptomsList.push(symptom)
          })
        }
        // console.log(res)
        // this.symptomsList = res
      }
    )
  }

  submit(){
    this.reportService.eventHappened(this.reportId,1).subscribe(
      res => {

      }
    )
    const returnArray: Symptom[] = []
    this.symptomsList.map(x => {
      if(x.isChecked === true){
        returnArray.push(x)
      }
    });
    this.symptomsToReturn.emit(returnArray)
    console.log(returnArray)
  }
  back(){
    this.reportService.eventHappened(this.reportId,-1).subscribe(
      res => {

      }
    )
    this.router.navigate(['appointments-by-doctor'])
  }
}