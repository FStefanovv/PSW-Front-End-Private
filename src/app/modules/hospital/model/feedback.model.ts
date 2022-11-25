export class Feedback {
  id: number = 0;
  patientName: string = '';
  patientSurname: string = '';
  text: string = '';
  visibleToPublic: Boolean = false;
  approved: Boolean = false;
  date: Date = new Date();
  anonymous: Boolean = false;

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.patientName = obj.patientName;
      this.patientSurname = obj.patientSurname;
      this.text = obj.text;
      this.visibleToPublic = obj.visibleToPublic;
      this.approved = obj.approved;
      this.date = obj.date;
      this.anonymous = obj.anonymous;
    }
  }
}