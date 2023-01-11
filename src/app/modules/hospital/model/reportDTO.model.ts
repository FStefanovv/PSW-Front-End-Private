import { Drug } from './drug.model';
import { Symptom } from './symptom.model';
export class ReportDTO{
  public patientId:string = ""
  public doctorId:string = ""
  public appointmentId: string = ""
  public description: string = ""
  public DATOfMaking: string = ""
  public symptoms: Symptom[] 
  public drugs: Drug[]

  public constructor(obj?: any){
    if(obj){
      this.patientId = obj.patientId
      this.doctorId = obj.doctorId
      this.appointmentId = obj.appointmentId
      this.description = obj.description
      this.DATOfMaking = obj.DATOfMaking
      this.symptoms = obj.symptoms
      this.drugs = obj.drugs
    }
  }
}