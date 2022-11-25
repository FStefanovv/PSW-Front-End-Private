export class CreateAppointmentDTO{
    doctorId: string = ""
    patientId: string = ""
    startDate: string = ""
    startTime: string = ""
    roomId: number = 0
    status: string = ""
    appointmentDuration: number = 20

    public constructor(obj?: any) {
        if (obj) {
            this.doctorId = obj.doctorId;
            this.patientId = obj.patientId;
            this.startDate = obj.startDate;
            this.startTime = obj.startTime;
            this.roomId = obj.roomId;
            this.status = obj.status;     
            this.appointmentDuration = obj.appointmentDuration;
        }
    }

}