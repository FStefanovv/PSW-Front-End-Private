export class RescheduleAppointmentDTO {
    id: string | null;
    patientId : string;
    date: string = "";
    time: string = "";
    
    public constructor(obj? : any){
           if(obj){
            this.id = obj.id
            this.patientId = obj.patientId
            this.date = obj.newDate
            this.time = obj.newTime
           } 
    }
}