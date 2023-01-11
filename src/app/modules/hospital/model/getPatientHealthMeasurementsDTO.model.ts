export class getPatientHealthMeasurementsDTO {
    month: string;
    patientId: string;

    public constructor(obj: any){
        this.month = obj.month;
        this.patientId = obj.patientId;
    }
}