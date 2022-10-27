export class Appointment {
    id: string = "";

    patientId: string = "";
    roomId: string = "";
    start: string = "";
    status?: number;

    appointmentDuration: number = 20;
    
    public constructor(obj: any){
        if(obj){
            this.id = obj.Id;
            this.patientId = obj.PatientId;
            this.roomId = obj.RoomId;
            this.start = obj.Start;
            this.status = obj.Status;
        }
    }
}