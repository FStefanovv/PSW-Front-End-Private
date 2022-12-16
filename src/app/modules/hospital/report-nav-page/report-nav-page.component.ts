import { Component, Input } from "@angular/core";

@Component({
  selector: 'report-nav-page',
  templateUrl: './report-nav-page.component.html'
})
export class ReportNavigation{
  @Input() recieveFlag: number = 0
  constructor(){

  }

  ngOnInit(): void{
  }
}