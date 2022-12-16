export class VacationRequest {
    id: number =  -1;
    start: string = '';
    end: string = '';
    description: string = '';
    status: string = '';
    urgency: string = '';
    rejectionReason: string = '';


    constructor(obj?: any){
        this.id = obj.Id;
        this.start = obj.Start;
        this.end = obj.End;
        this.description = obj.Description;
        this.urgency = obj.Urgency;
        this.rejectionReason = obj.RejectionReason;
        switch(obj.Status){
            case 0: this.status = 'Waiting For Approval'; break;
            case 1: this.status = 'Cancelled'; break;
            case '2': this.status = 'Accepted'; break;
            case '3': this.status = 'Disapproved'; break;
          }
    }
}