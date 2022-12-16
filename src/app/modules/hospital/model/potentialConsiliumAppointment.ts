import { Duration } from "moment";

export class PotentialAppointmentDTO {
    DoctorIds:string;
    start:string;
    End:string;
    Topic:string;
    Specialties:string;
    Duration:Duration;
  
    public constructor(obj?: any){
      if(obj){
        this.DoctorIds = obj.DoctorIds
        this.start = obj.start
        this.Specialties = obj.Specialties;
        this.End = obj.End;
        this.Topic = obj.Topic;
        this.Duration = obj.Duration;
      }
    }
  }