import { Drug } from "./drug.model";
import { Symptom } from "./symptom.model";

export class SearchReportDTO{
  Symptoms: Array<Symptom> = []
  DayAndTimeOfMaking: string  = ""
  Description: string = ""
  Prescriptions : Array<Drug> = []
  PatientId: string = ""
  AppointmentId: string = ""

  public constructor(obj?: any){
    if(obj){
      this.Symptoms = obj.Symptoms
      this.DayAndTimeOfMaking = obj.DayAndTimeOfMaking
      this.Description = obj.Description
      this.Prescriptions = obj.Prescriptions
      this.PatientId = obj.PatientId
      this.AppointmentId = obj.AppointmentId
    }
  }
}