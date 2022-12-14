import { ReportService } from './../services/report.service';
import { ReportDTO } from './../model/reportDTO.model';
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Drug } from "../model/drug.model";
import { Symptom } from "../model/symptom.model";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'report-step-four',
  templateUrl: './report-step-four.component.html'
})
export class ReportStepFour{
  public backString: string = ""
  @Output() backEmit4 = new EventEmitter<{backString4: string}>()
  @Input() symptoms: Symptom[]
  @Input() drugs: Drug[]
  @Input() description: string = ""
  public appointmentId: string = ""
  
  constructor(private reportService: ReportService,private route: ActivatedRoute,private router: Router){
    this.route.queryParams.subscribe(params =>{
      this.appointmentId = params.appointmentId
    })
  }

  ngOnInit():void{

  }
  public submit(){
    let reportDTO: ReportDTO = new ReportDTO()
    reportDTO.appointmentId = this.appointmentId
    reportDTO.doctorId = "DOC1"
    reportDTO.patientId = "stojane"
    reportDTO.description = this.description
    reportDTO.symptoms = this.symptoms
    reportDTO.drugs = this.drugs
    this.reportService.createReport(reportDTO).subscribe(res=>{
      alert("Poslato")
    })
    this.router.navigate(['/appointments-by-doctor'])
  }
  public back(){

    this.backEmit4.emit({backString4: this.backString})


    
  }
}