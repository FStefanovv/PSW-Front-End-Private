export class InfoForAppointmentsDTO{
    Topic : string = "";
    StartStr : string = "";
    EndStr : string = "";
    Duration : string = "";
    DoctorIds : string = "";
    Specialties : string = "";

    constructor(obj?:any)
    {
        if(obj)
        {
            this.Topic=obj.Topic;
            this.StartStr=obj.StartStr;
            this.EndStr = obj.EndStr;
            this.Duration=obj.Duration ;
            this.DoctorIds=obj.DoctorIds;
            this.Specialties = obj.Specialties;
        }
    }
}