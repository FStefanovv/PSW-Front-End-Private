import { Component, EventEmitter, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Drug } from "../model/drug.model";
import { ReportService } from "../services/report.service";

@Component({
  selector: 'report-step-three',
  templateUrl: './report-step-three.component.html'
})
export class ReportStepThree{
  @Output() drugsToReturn = new EventEmitter<Drug[]>()
  public backString: string = ""
  @Output() backEmit3 = new EventEmitter<{backString3: string}>()
  form: FormGroup
  public listOfDrugs: Array<Drug>

 
  
  constructor(private reportService: ReportService) { }
 
  ngOnInit(): void {

  this.reportService.getDrugs().subscribe(res=>{this.listOfDrugs=res})

  }


  
  
  submit(){
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

    this.backEmit3.emit({backString3: this.backString})
  }
}