import { Drug } from './drug.model';
export class DrugPrescriptionToShow{
  reportId: string=""
  drugs:Array<Drug> = []
 

  public constructor(obj?: any){
    if(obj){
      this.reportId = obj.reportId
      this.drugs = obj.drugs
      
    }
  }
}