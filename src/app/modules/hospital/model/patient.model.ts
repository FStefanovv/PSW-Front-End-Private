export class Patient{
    id: string = "";
    name: string = "";
    surname: string = "";
    email: string = "";
    gender: string = "";
    age: number = 0;
    bloodType: string = "";
    allergies: string[] = [];
    doctorId: string = "";
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
            this.doctorId = obj.doctorId;
            this.active = obj.active;
        }
    }
}