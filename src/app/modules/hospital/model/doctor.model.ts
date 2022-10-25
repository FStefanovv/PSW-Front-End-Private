import { Room } from 'src/app/modules/hospital/model/room.model';
import { Appointment } from 'src/app/modules/hospital/model/appointment.model';

export class Doctor{
    id: string =""
    name: string=""
    surname: string=""
    email: string=""
    room: Room = new Room()
    startWorkTime: number = 0
    endWorkTime: number = 0
    appointments: Array<Appointment> = []

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.name = obj.name;
            this.surname = obj.surname;
            this.email = obj.email;        
            this.room = obj.room;        
            this.startWorkTime = obj.startWorkTime;        
            this.endWorkTime = obj.endWorkTime;        
            this.appointments = obj.appointments;
        }
    }
}