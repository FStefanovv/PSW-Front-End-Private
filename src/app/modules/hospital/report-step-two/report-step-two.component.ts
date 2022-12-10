import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'report-step-two',
  templateUrl: './report-step-two.component.html'
})
export class ReportStepTwo{
  public description: string = ""
  @Output() descriptionEmit = new EventEmitter<{description: string}>()

  constructor(){

  }

  submit(){
    this.descriptionEmit.emit({description: this.description})
  }

}