export class Feedback {
  id: number = 0;
  patientId: string = '';
  text: string = '';
  date: string = '';
  approved: boolean = false;

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.patientId = obj.patientId;
      this.text = obj.text;
      this.date = obj.date;
      this.approved = obj.approved;
    }
  }
}
