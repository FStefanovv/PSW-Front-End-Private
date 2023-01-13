export class getPatientHealthMeasurementsDTO {
    month: string = "";
    patientId: string = "";

    public constructor(obj?: any){
        if(obj){
            this.month = obj.month;
        this.patientId = obj.patientId;
        }
    }
}