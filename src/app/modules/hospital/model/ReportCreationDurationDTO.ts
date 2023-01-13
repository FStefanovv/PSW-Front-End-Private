export class ReportCreationDuration{
  reportId: string = "";
  durationInSeconds: number = 0;
  durationString: string = "";

  public constructor(obj?: any){
    if(obj){
      this.reportId = obj.reportId
      this.durationInSeconds = obj.durationInSeconds
      this.durationString = obj.durationString
    }
  }
}