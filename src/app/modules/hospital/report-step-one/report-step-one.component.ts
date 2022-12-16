import { Symptom } from './../model/symptom.model';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ReportService } from './../services/report.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'report-step-one',
  templateUrl: './report-step-one.component.html'
})
export class ReportStepOne{
  @Output() symptomsToReturn = new EventEmitter<Symptom[]>()
  form: FormGroup
  public symptomsList: Array<Symptom>

  constructor(private reportService: ReportService,private router:Router) {
    
  }

  ngOnInit(): void{
    this.reportService.getSymptoms().subscribe(
      res => {
        this.symptomsList = res
      }
    )
  }

  submit(){
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
    this.router.navigate(['appointments-by-doctor'])
  }
}