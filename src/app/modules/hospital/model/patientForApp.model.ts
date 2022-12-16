export class PatientForApp{
  id: string = ""
  name: string = ""
  surname: string = ""

  public constructor(obj?: any){
    if(obj){
      this.id = obj.id 
      this.name = obj.name
      this.surname = obj.surname
    }
  }
}