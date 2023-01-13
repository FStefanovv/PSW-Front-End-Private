export class DurationAndNumOfStepsAge{
  reportId: string = ""
  age: number = 0
  numberOfSteps: number = 0
  duration: number = 0
  durationString: number = 0

  public constructor(obj?:any){
    if(obj){
      this.reportId = obj.reportId
      this.age = obj.age
      this.numberOfSteps = obj.numberOfSteps
      this.duration = obj.duration
      this.durationString = obj.durationString
    }
  }
}