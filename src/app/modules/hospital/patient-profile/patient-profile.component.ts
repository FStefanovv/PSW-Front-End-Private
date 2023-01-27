import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { FormsModule } from '@angular/forms';
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
    selector: 'app-patient-profile',
    templateUrl: './patient-profile.component.html',
    styleUrls: ['./patient-profile.component.css']
})

export class PatientProfileComponent implements OnInit {

    public patient: Patient;
    public id: string;
    constructor(private patientService: PatientService, private router: Router, public route: ActivatedRoute) { }

    ngOnInit() : void {

      //  this.patientService.getPatient(this.route.snapshot.paramMap.get('id')).subscribe(res => {
            
        //    this.patient = res;

//        });
    }
}
