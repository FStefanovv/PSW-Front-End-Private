export class PatientForReport{
  id: string = ""
  name: string = ""
  surname: string = ""
  age: number = 0
  bloodType: string = ""

  public constructor(obj?:any){
    if(obj){
      this.id = obj.id 
      this.name = obj.name 
      this.surname = obj.surname 
      this.age = obj.age 
      this.bloodType = obj.bloodType 
    }
  }
}