export class CheckDateSpecialtyDTO {
    appointmentDate: string;
    specialty: number;
   
    public constructor(obj?: any){
        if(obj){
            this.appointmentDate = obj.appointmentDate;
            this.specialty = obj.specialty;
        }
    }
}
