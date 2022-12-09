export class Symptom{
  name: string = ""

  public constructor(obj?: any){
    if(obj){
      this.name = obj.name
    }
  }
}