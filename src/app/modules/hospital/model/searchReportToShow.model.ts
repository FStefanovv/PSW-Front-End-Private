export class SearchReportToShow{
  symptoms: string = ""
  dayAndTimeOfMaking: string  = ""
  description: string = ""
  prescriptions : string = ""
  patientId: string = ""
  name: string = ""
  surname: string = ""
  appointmentId: string = ""

  public constructor(obj?: any){
    if(obj){
      this.symptoms = obj.symptoms
      this.dayAndTimeOfMaking = obj.dayAndTimeOfMaking
      this.description = obj.description
      this.prescriptions = obj.prescriptions
      this.patientId = obj.patientId
      this.name = obj.name
      this.surname = obj.surname
      this.appointmentId = obj.appointmentId
    }
  }
}