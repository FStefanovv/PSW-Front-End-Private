export class BloodRequestDTO{
  type: string = ""
  amount: number = 0
  reason: string = ""
  due: string = ""
  id: number = 0
  doctorId: string = ""

  public constructor(obj?: any){
    if (obj) {
      this.id = obj.id
      this.type = obj.type
      this.amount = obj.amount
      this.reason = obj.reason 
      this.due = obj.due
      this.doctorId = obj.doctorId

    }
  }
}
