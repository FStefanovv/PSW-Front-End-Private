import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ReportService } from "../services/report.service";

@Component({
  selector: 'report-step-two',
  templateUrl: './report-step-two.component.html'
})
export class ReportStepTwo{
  public description: string = ""
  @Output() descriptionEmit = new EventEmitter<{description: string}>()
  public backString: string = ""
  @Output() backEmit2 = new EventEmitter<{backString2: string}>()
  @Input() reportId: string = ""
  @Input() savedDescription: string = ""

  constructor(private reportService: ReportService){

  }

  ngOnInit(): void{
    if(this.savedDescription != ""){
      this.description = this.savedDescription
    }
  }

  submit(){
    this.reportService.eventHappened(this.reportId,1).subscribe(
      res => {

      }
    )
    this.descriptionEmit.emit({description: this.description})
  }
  back(){
    this.reportService.eventHappened(this.reportId,-1).subscribe(
      res => {

      }
    )
    this.backEmit2.emit({backString2: this.backString})
  }

}