export class PatientTreatmentDTO{
    id: string="";
    patientId: string=""
    roomId: string="";
    bedId: string=""
    //therapy: string=""
    //startDate: string=""
   // status: string = ""

    constructor(obj?:any){
        if(obj){
            this.id=obj.Id;
            this.patientId=obj.PatientID;
            this.roomId=obj.RoomID;
            this.bedId=obj.BedID;
            //this.therapy=obj.Therapy;
            //this.startDate=obj.startDate;
           // this.status=obj.Status;

            
        }
    }
}