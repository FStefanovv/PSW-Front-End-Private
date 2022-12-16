export class CreateBloodRecordDTO{
    amount: number = 0
    type: string = ""
    reason: string = ""
 

    public constructor(obj?: any){
        if (obj) {
            this.amount = obj.amount
            this.type = obj.type
            this.reason = obj.reason
           
        }
    }

}
