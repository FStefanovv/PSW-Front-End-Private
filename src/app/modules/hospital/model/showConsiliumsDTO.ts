export class ShowConsiliumsDTO{
    start : string = ""
    duration : number = 0
    doctorNames : Array<string> = []
    room : string = ""
    topic : string = ""
  
    public constructor(obj?: any){
      if(obj){
        this.start = obj.start
        this.duration = obj.duration
        this.doctorNames = obj.doctorNames
        this.room = obj.room
        this.topic = obj.topic
      }
    }
  }