export class BloodRequestDTO{
  type: string = ""
  amount: number = 0
  reason: string = ""
  requestDate: string = "" 

  public constructor(obj?: any){
    if (obj) {
      this.type = obj.type
      this.amount = obj.amount
      this.reason = obj.reason 
      this.requestDate = obj.requestDate
    }
  }
}