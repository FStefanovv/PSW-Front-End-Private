export class Patient{
    id: string = "";
    name: string = "";
    surname: string = "";
    email: string = "";
    gender: number = 0;
    age: number = 0;
    bloodType: number = 0;
    allergies: string[] = [];
    doctorID: string = "";
    active: boolean;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.name = obj.name;
            this.surname = obj.surname;
            this.email = obj.email;        
            this.gender = obj.gender;
            this.age = obj.age;
            this.bloodType = obj.bloodType;
            this.allergies = obj.allergies;
            this.doctorID = obj.doctorId;
            this.active = obj.active;
        }
    }
}