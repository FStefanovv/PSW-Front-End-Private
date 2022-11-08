export class RescheduleAppointmentDTO {
    id: string = "";
    date: string = "";
    time: string = "";
    
    public constructor(id : string, newDate : string, newTime : string){
            this.id = id,
            this.date = newDate,
            this.time = newTime
    }
}