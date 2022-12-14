import { Duration } from "moment";

export class PotentialAppointmentDTO {
    DoctorIds:string;
    Start:string;
    End:string;
    Topic:string;
    Specialties:string;
    Duration:Duration;
  
    public constructor(obj?: any){
      if(obj){
        this.DoctorIds = obj.DoctorIds
        this.Start = obj.Start
        this.Specialties = obj.Specialties;
        this.End = obj.End;
        this.Topic = obj.Topic;
        this.Duration = obj.Duration;
      }
    }
  }