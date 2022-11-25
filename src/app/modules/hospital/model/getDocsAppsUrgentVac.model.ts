export class GetDocsAppsUrgentVac {
  id: string = "";
  patient: string = ""
  date: string = ""
  time: string = ""
  
  public constructor(obj?: any){
      if(obj){
          this.id = obj.id;
          this.patient = obj.patient;
          this.date = obj.date;
          this.time = obj.time
      }
  }
}