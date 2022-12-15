export class ShowConsiliumsDTO{
    Start : string = ""
    Duration : number = 0
    DoctorNames : Array<string> = []
    Room : string = ""
    Topic : string = ""
  
    public constructor(obj?: any){
      if(obj){
        this.Start = obj.Start
        this.Duration = obj.Duration
        this.DoctorNames = obj.DoctorNames
        this.Room = obj.Room
        this.Topic = obj.Topic
      }
    }
  }