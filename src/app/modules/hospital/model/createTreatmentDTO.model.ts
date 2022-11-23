export class CreateTreatmentDTO {

    doctorId: string=""
    patientId: string=""
    roomId: string=""
    bedId: string=""
    AdmissionReason: string=""
    Therapy: string=""


    constructor(obj?:any)
    {
        if(obj)
        {
            this.doctorId=obj.DoctorID
            this.patientId=obj.PatientID
            this.roomId=obj.RoomID
            this.bedId=obj.BedID
            this.AdmissionReason=obj.AdmissionReason
            this.Therapy=obj.Therapy


        }
    }







}