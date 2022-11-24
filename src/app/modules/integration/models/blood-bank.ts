export class BloodBank {
    username: string;
    path: string;
    email: string;
    id: string;


    public constructor(){}
}
export class BB{
    id: string;
    username: string;
    path: string;
    password: string;
    email: string;
    apikey: string;
    isConfirmed: boolean;
    public constructor(){}
}
export class ReportDTO{
   id:string;
   period:string;
   public constructor(){}
}