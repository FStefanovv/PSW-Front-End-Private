import { Component } from "@angular/core";
import { ReportService } from "../services/report.service";

@Component({
  selector: 'report-step-three',
  templateUrl: './report-step-three.component.html'
})
export class ReportStepThree{

  listOfDrugs: string[]=[];
  
  constructor(private reportService: ReportService) { }
 
  ngOnInit(): void {

  this.reportService.getDrugs().subscribe(res=>{this.listOfDrugs=res})

  }
}