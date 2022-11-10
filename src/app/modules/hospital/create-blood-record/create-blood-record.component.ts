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

    constructor(private bloodService: BloodService,private router: Router) { }

    public createBloodRecord() {
        this.bloodService.createBloodRecord(this.createBloodRecordDTO).subscribe(res =>{
            alert("Poslato")
        },error => {
            alert("Nije poslato")
        })
    }

}