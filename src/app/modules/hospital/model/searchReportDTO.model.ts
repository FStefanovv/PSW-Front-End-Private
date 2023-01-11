import { Drug } from "./drug.model";
import { Symptom } from "./symptom.model";

export class SearchReportDTO{
  symptoms: Array<Symptom> = []
  dayAndTimeOfMaking: string  = ""
  description: string = ""
  prescriptions : Array<Drug> = []
  patientId: string = ""
  appointmentId: string = ""

  public constructor(obj?: any){
    if(obj){
      this.symptoms = obj.symptoms
      this.dayAndTimeOfMaking = obj.dayAndTimeOfMaking
      this.description = obj.description
      this.prescriptions = obj.prescriptions
      this.patientId = obj.patientId
      this.appointmentId = obj.appointmentId
    }
  }
}