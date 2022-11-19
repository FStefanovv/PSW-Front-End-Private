export class DischargePatientDTO{
    id: string="";
    patient: string=""
    room: string="";
    bed: string=""
    therapy: string=""
    startDate: string=""
    endDate: string=""
    reason: string=""
    status: string = ""

    constructor(obj?:any){
        if(obj){
            this.id=obj.Id;
            this.patient=obj.Patient;
            this.room=obj.Room;
            this.bed=obj.Bed;
            this.therapy=obj.Therapy;
            this.startDate=obj.StartDate;          
            this.endDate=obj.EndDate;
            this.reason=obj.Reason;
            this.status=obj.Status;

            
        }
    }





}