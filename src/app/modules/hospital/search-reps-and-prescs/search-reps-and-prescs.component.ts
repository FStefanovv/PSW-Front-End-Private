import { Patient } from './../model/patient.model';
import { PatientService } from './../services/patient.service';
import { SearchReportDTO } from './../model/searchReportDTO.model';
import { ReportService } from './../services/report.service';
import {Component} from "@angular/core"
import { SearchReportToShow } from '../model/searchReportToShow.model';
@Component({
  selector: 'search-reports-and-prescriptions',
  templateUrl: './search-reps-and-prescs.component.html',
})
export class SearchReportsAndPrescriptionsComponent{
  public searchedContent: string = ""
  public filter: string = ""
  public returnDTO: Array<SearchReportDTO> = []
  public listToShow: Array<SearchReportToShow> = []
  public allBool: boolean = true
  public sympotmsBool: boolean = false
  public drugsBool: boolean = false
  constructor(private reportService: ReportService, private patientService: PatientService){
    
  }

  separateWords(words: string){
    console.log(words)
    if(words[0] == `"`){
      var wordsArray = words.split('"')
      let arrayToReturn = [] 
      arrayToReturn.push(wordsArray[1])
      return arrayToReturn
    }else{
      var wordsArray = words.split(' ')
      console.log(wordsArray)
      return wordsArray
    }
  }

  changeDTO(listToIterate: Array<SearchReportDTO>){
    listToIterate.forEach(item => {
      let report: SearchReportToShow = new SearchReportToShow()
      let symptomString: string
      let drugString: string
      let name: string
      let surname: string
      let patient: Patient = new Patient()
      this.patientService.getPatient(parseInt(item.patientId)).subscribe(
        res => {
          patient = res
          report.name = patient.name
          report.surname = patient.surname
        }
      )
      report.appointmentId = item.appointmentId
      report.dayAndTimeOfMaking = item.dayAndTimeOfMaking
      report.description = item.description
      report.patientId = item.patientId
      item.symptoms.forEach(symtpom => symptomString = symptomString + symtpom.name + " ")
      let flag1 = symptomString.split("undefined")
      report.symptoms = flag1[1]
      item.prescriptions.forEach(prescription => drugString = drugString + prescription.name + " ")
      let flag2 = drugString.split("undefined")
      report.prescriptions = flag2[1]
      this.listToShow.push(report)
      console.log(report)
    })
  }

  search(){
    const wordsToSend = this.separateWords(this.searchedContent)
    this.reportService.searchReports(wordsToSend).subscribe(
      res =>{
        console.log(res)
        this.returnDTO = res
        this.changeDTO(res)
      }
    )
  }

  filterList(){
    if(this.filter == "Report"){
      this.sympotmsBool = true
      this.drugsBool = false
      this.allBool = false
    }else if(this.filter == "Prescription"){
      this.drugsBool = true
      this.sympotmsBool = false
      this.allBool = false
    }else{
      this.drugsBool = false
      this.sympotmsBool = false
      this.allBool = true
    }
  }
}