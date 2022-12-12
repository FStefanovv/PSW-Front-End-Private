export class InfoForAppointmentsDTO{
    topic : string = "";
    start : string = "";
    end : string = "";
    duration : string = "";
    doctorIds : string[] = [];
    specialties : string[] = [];

    constructor(obj?:any)
    {
        if(obj)
        {
            this.topic=obj.topic;
            this.start=obj.start;
            this.end = obj.end;
            this.duration=obj.Duration ;
            this.doctorIds=obj.doctorIds;
            this.specialties = obj.specialties;
        }
    }
}