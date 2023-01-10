export class SearchReportToShowReportsOnly{
  symptoms: string = ""
  dayAndTimeOfMaking: string  = ""
  description: string = ""
  patientId: string = ""
  appointmentId: string = ""

  public constructor(obj?: any){
    if(obj){
      this.symptoms = obj.symptoms
      this.dayAndTimeOfMaking = obj.dayAndTimeOfMaking
      this.description = obj.description
      this.patientId = obj.patientId
      this.appointmentId = obj.appointmentId
    }
  }
}