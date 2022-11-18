export class PatientTreatment{
    id: string="";
    patient: string=""
    room: string="";
    bed: string=""
    therapy: string=""

    constructor(obj:any){
        if(obj){
            this.id=obj.Id;
            this.patient=obj.Patient;
            this.room=obj.Room;
            this.bed=obj.Bed;
            this.therapy=obj.Therapy;
            
        }
    }
}