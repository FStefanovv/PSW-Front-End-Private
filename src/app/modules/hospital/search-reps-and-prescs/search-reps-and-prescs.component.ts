import { SearchReportDTO } from './../model/searchReportDTO.model';
import { ReportService } from './../services/report.service';
import {Component} from "@angular/core"
@Component({
  selector: 'search-reports-and-prescriptions',
  templateUrl: './search-reps-and-prescs.component.html',
})
export class SearchReportsAndPrescriptionsComponent{
  public searchedContent: string = ""
  public filter: string = ""
  public returnDTO: Array<SearchReportDTO> = []
  constructor(private reportService: ReportService){
    
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

  search(){
    const wordsToSend = this.separateWords(this.searchedContent)
    this.reportService.searchReports(wordsToSend).subscribe(
      res =>{
        console.log(res)
        this.returnDTO = res
      }
    )
  }
}