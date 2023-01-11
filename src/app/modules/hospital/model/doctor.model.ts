import { Room } from 'src/app/modules/hospital/model/room.model';
import { CreateAppointmentDTO } from 'src/app/modules/hospital/model/createAppointmentDTO.model';

export class Doctor{
    id: number;
    name: string=""
    surname: string=""
    email: string=""
    room: Room = new Room()
    startWorkTime: number = 0
    endWorkTime: number = 0
    appointments: Array<CreateAppointmentDTO> = []


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