export class PatientHealthMeasurements {

    measurementTime: string;
    weight: number;
    bloodPressureUpper: number;
    bloodPressureLower: number;
    heartbeat: number;
    temperature: number;
    bloodSugarLevel: number;

    public constructor(obj: any){
        this.measurementTime = obj.measurementTime;
        this.weight = obj.weight;
        this.bloodPressureUpper = obj.bloodPressureUpper;
        this.bloodPressureLower = obj.bloodPressureLower;
        this.heartbeat = obj.heartbeat;
        this.temperature = obj.temperature;
        this.bloodSugarLevel = obj.bloodSugarLevel;
    }
}