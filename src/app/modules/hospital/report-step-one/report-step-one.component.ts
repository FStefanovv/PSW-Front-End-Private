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