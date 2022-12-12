import { Drug } from './drug.model';
export class DrugPrescriptionToShow{
  id:string=""
  reportId: string=""
  drugs:Array<Drug> = []
 

  public constructor(obj?: any){
    if(obj){
      this.id = obj.id
      this.reportId = obj.reportId
      this.drugs = obj.drugs
      
    }
  }
}