export class Feedback {
  id: number = 0;
  patientId: number = 0;
  patientName: string = '';
  patientSurname: string = '';
  text: string = '';
  visibleToPublic: Boolean = false;
  approved: Boolean = false;
  date: string = '';
  anonymous: Boolean = false;

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.patientId = obj.patientId;
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
