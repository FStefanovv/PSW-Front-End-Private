export class NumOfTimeOnEachStep{
  reportId: string = ""
  step0: number = 0
  step1: number = 0
  step2: number = 0
  step3: number = 0
  step4: number = 0

  public constructor(obj?: any){
    if(obj){
      this.reportId = obj.reportId
      this.step0 = obj.step0
      this.step1 = obj.step1
      this.step2 = obj.step2
      this.step3 = obj.step3
      this.step4 = obj.step4
    }
  }
}