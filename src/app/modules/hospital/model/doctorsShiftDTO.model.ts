export class DoctorShiftDTO{
    id: number;
    startWorkTime: number = 0
    endWorkTime: number = 0

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.startWorkTime = obj.startWorkTime
            this.endWorkTime = obj.endWorkTime
        }
    }
}