export class Appointment {
    id: string = "";

    patientId: string = "";
    roomNumber: string = "";
    start: string = "";
    status?: number;
    date?: string;
    startTime?: string;
    cancellable?: boolean;

    appointmentDuration: number = 20;
    
    public constructor(obj: any){
        if(obj){
            this.id = obj.Id;
            this.patientId = obj.PatientId;
            this.roomNumber = obj.RoomNumber;
            this.start = obj.Start;
            this.status = obj.Status;
            this.cancellable = this.status==1? false : true;
        }
    }
}