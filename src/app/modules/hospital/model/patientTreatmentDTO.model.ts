export class PatientTreatmentDTO{
    id: string="";
    patient: string=""
    room: string="";
    bed: string=""
    therapy: string=""
    startDate: string=""
    status: string = ""

    constructor(obj:any){
        if(obj){
            this.id=obj.Id;
            this.patient=obj.Patient;
            this.room=obj.Room;
            this.bed=obj.Bed;
            this.therapy=obj.Therapy;
            this.startDate=obj.startDate;
            this.status=obj.Status;

            
        }
    }
}