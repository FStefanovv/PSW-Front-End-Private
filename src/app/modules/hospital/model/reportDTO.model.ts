import { Drug } from './drug.model';
import { Symptom } from './symptom.model';
export class ReportDTO{
  public patientId: number;
  public doctorId: number;
  public appointmentId: string = ""
  public description: string = ""
  public datOfMaking: string = ""
  public symptoms: Symptom[] 
  public drugs: Drug[]

  public constructor(obj?: any){
    if(obj){
      this.patientId = obj.patientId
      this.doctorId = obj.doctorId
      this.appointmentId = obj.appointmentId
      this.description = obj.description
      this.datOfMaking = obj.datOfMaking
      this.symptoms = obj.symptoms
      this.drugs = obj.drugs
    }
  }
}