export class DischargePatientDTO{
    id: string="";
    patientId: string=""
    roomId: string="";
    bedId: string=""
    therapy: string=""
    startDate: string=""
    endDate: string=""
    reason: string=""
    //status: string = ""

    constructor(obj?:any){
        if(obj){
            this.id=obj.Id;
            this.patientId=obj.PatientID;
            this.roomId=obj.RoomID;
            this.bedId=obj.BedID;
            this.therapy=obj.Therapy;
            this.startDate=obj.StartDate;          
            this.endDate=obj.EndDate;
            this.reason=obj.Reason;
            //this.status=obj.Status;

            
        }
    }





}