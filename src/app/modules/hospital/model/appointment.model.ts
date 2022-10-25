export class Appointment {
    appointmentDuration: number = 20
    id: string = ""
    doctorId: string = ""
    //doctor: Doctor = new Doctor()
    patientId: string = ""
    start: string = ""
    duration: number = 0
    //room: Room = new Room()
    status?: number;
    
    public constructor(obj: any){
        if(obj){
            this.id = obj.id;
            this.doctorId = obj.doctorId;
            this.patientId = obj.patientId;
            this.start = obj.start;
            this.duration = obj.duration;
            this.status = obj.status; 
        }
    }
}