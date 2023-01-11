export class CreateAppointmentDTO{
    doctorId: number;
    patientId: number;
    startDate: string = ""
    startTime: string = ""
    roomId: number;
    status: string= "";
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