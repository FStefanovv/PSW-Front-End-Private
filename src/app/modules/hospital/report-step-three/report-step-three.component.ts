import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Drug } from "../model/drug.model";
import { ReportService } from "../services/report.service";

@Component({
  selector: 'report-step-three',
  templateUrl: './report-step-three.component.html'
})
export class ReportStepThree{
  @Input() reportId: string = ""
  @Input() checkedDrugs: Array<Drug> = []
  @Output() drugsToReturn = new EventEmitter<Drug[]>()
  public backString: string = ""
  @Output() backEmit3 = new EventEmitter<{backString3: string}>()
  form: FormGroup
  public listOfDrugs: Array<Drug> = []

 
  
  constructor(private reportService: ReportService) { }
 
  ngOnInit(): void {

  this.reportService.getDrugs().subscribe(res=>{
    if(this.checkedDrugs == null){
      this.listOfDrugs = res
    }else{
      res.forEach(drug =>{
        drug.isChecked = this.reutrnBool(drug)
        console.log(drug)
        this.listOfDrugs.push(drug)
      })
    }
  })

  }

  reutrnBool(drug: Drug){
    let flag: boolean = false
    this.checkedDrugs.forEach(checked =>{
      if(checked.name == drug.name){
        flag = true
      }
    })
    return flag
  }
  
  
  submit(){
    this.reportService.eventHappened(this.reportId,1).subscribe(
      res => {

      }
    )
    const returnArray: Drug[] = []
    this.listOfDrugs.map(x => {
      if(x.isChecked === true){
        returnArray.push(x)
      }
    });
    this.drugsToReturn.emit(returnArray)
    console.log(returnArray)
    
  }
  public back(){
    this.reportService.eventHappened(this.reportId,-1).subscribe(
      res => {

      }
    )
    this.backEmit3.emit({backString3: this.backString})
  }
}