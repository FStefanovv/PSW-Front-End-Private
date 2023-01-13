export class ReportCreationDuration{
  reportId:string = ""
  repodurationInSecondsrtId:number = 0
  redurationStringportId:string = ""

  public constructor(obj?: any){
    if(obj){
      this.reportId = obj.reportId
      this.repodurationInSecondsrtId = obj.repodurationInSecondsrtId
      this.redurationStringportId = obj.redurationStringportId
    }
  }
}