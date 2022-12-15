export class UrgentVacationRequest {
  start: string = '';
  end: string = '';
  description: string = '';
  urgency: string = '';

  public constructor(obj?: any) {
      if (obj) {
          this.start = obj.start
          this.end = obj.end
          this.description = obj.description
          this.urgency = obj.urgency
      }
  }
}