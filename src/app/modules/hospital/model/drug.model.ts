export class Drug{
    name: string = ""
    companyName: string="Za milosa"
    isChecked: Boolean = false
  
    public constructor(obj?: any){
      if(obj){
        this.name = obj.name
        this.isChecked = obj.isChecked
      }
    }
}