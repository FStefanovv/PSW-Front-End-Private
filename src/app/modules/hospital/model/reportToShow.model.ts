import { Symptom } from "./symptom.model"

export class ReportToShow{
  id: string = ""
  symptoms: Array<Symptom> = []
  patientId: string = ""
  description: string = ""
  appointmentId: string = ""

  public constructor(obj?: any){
    if(obj){
      this.id = obj.id 
      this.symptoms = obj.symptoms 
      this.patientId = obj.patientId
      this.description = obj.description
      this.appointmentId = obj.appointmentId
    }
  }
}