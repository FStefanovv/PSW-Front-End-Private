export class Appointment {
    id?: string;
    start?: string;
    status?: string;
    patient?: string;
    room?: string;
    doctor?: string;

    public constructor(obj: any){
        if(obj){
            this.id = obj.id;
            this.start = obj.start;
            this.status = obj.status;
            this.patient = obj.patient;
            this.room = obj.room;
            this.doctor = obj.doctor;
        }
    }
}
