export class BloodBank{
  Username: string  = ""
  Path: string = ""
  Email: string = ""
  Id: string = ""
   public constructor(obj?: any){
    if(obj){
      this.Username = obj.username
      this.Path = obj.path
      this.Email = obj.email
      this.Id = obj.id
    }
   }
}