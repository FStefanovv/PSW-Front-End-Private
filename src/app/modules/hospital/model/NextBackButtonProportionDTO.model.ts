export class NextBackButtonProportion{
  reportId: string = ""
  pressNext: number = 0
  pressBack: number = 0

  public constructor(obj?: any){
    if(obj){
      this.reportId =  obj.reportId
      this.pressNext =  obj.pressNext
      this.pressBack =  obj.pressBack
    }
  }
}