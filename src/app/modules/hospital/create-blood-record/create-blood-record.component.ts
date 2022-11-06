import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateBloodRecordDTO } from '../model/createBloodRecord.modleDTO';
import { BloodRecordService } from '../services/blood-record.service';

@Component({
    selector: 'create-blood-record',
    templateUrl: './create-blood-record.component.html',
    styleUrls: ['./create-blood-record.component.css']
})
export class CreateBloodRecordComponent {
    public createBloodRecordDTO: CreateBloodRecordDTO = new CreateBloodRecordDTO()

    constructor(private bloodRecordService: BloodRecordService,private router: Router) { }

    public createBloodRecord() {

    }

}