import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateBloodRecordDTO } from '../model/createBloodRecord.modleDTO';
import { BloodService } from '../services/blood.service';

@Component({
    selector: 'create-blood-record',
    templateUrl: './create-blood-record.component.html',
    styleUrls: ['./create-blood-record.component.css']
})
export class CreateBloodRecordComponent {
    public createBloodRecordDTO: CreateBloodRecordDTO = new CreateBloodRecordDTO()
    amountNull: boolean = false
    typeNull: boolean = false
    reasonNull: boolean = false

    constructor(private bloodService: BloodService,private router: Router) { }

    public createBloodRecord() {
        if(!this.isValidInputAmount()) this.amountNull = true
        if(!this.isValidInputType()) this.typeNull = true
        if(!this.isValidInputReason()) this.reasonNull = true
        if(this.amountNull == true || this.typeNull == true || this.reasonNull == true) return        
        this.bloodService.createBloodRecord(this.createBloodRecordDTO).subscribe(res =>{
            alert("Poslato")
        },error => {
            alert("Los zahtev")
        })
        this.router.navigate(['doctor-home']);
    }

    private isValidInputAmount(): boolean{
        this.amountNull = false
        return this.createBloodRecordDTO.amount > 0
    }
    private isValidInputType(): boolean{
        this.typeNull = false
        return this.createBloodRecordDTO.type != ''
    }
    private isValidInputReason(): boolean{
        this.reasonNull = false
        return this.createBloodRecordDTO.reason != ''  
    }
}