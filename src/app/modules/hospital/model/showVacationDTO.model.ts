export class ShowVacation{
  id:number
  doctorId:string
  start:string
  end:string
  description:string

  public constructor(obj?: any){
    if(obj){
      this.id = obj.id
      this.doctorId = obj.doctorId
      this.start = obj.start
      this.end = obj.end
      this.description = obj.description
    }
  }
}