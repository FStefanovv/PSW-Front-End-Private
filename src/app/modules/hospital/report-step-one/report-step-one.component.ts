import { ReportService } from './../services/report.service';
import { Component } from "@angular/core";

@Component({
  selector: 'report-step-one',
  templateUrl: './report-step-one.component.html'
})
export class ReportStepOne{

  constructor(private reportService: ReportService) {}

  ngOnInit(): void{
    
  }
}