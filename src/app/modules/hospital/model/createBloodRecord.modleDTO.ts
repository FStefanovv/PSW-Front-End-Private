export class CreateBloodRecordDTO{
    amount: number = 0
    type: string = ""
    reason: string = ""
    date: string = ""
    time: string = ""
    doctorId: string = ""

    public constructor(obj?: any){
        if (obj) {
            this.amount = obj.amount
            this.type = obj.type
            this.reason = obj.reason
            this.date = obj.date
            this.time = obj.time
            this.doctorId = obj.doctorId
        }
    }

}