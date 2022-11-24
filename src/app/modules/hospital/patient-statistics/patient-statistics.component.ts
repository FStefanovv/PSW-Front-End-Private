import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { FormsModule } from '@angular/forms';
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
    selector: 'app-patient-statistics',
    templateUrl: './patient-statistics.component.html',
    styleUrls: ['./patient-statistics.component.css']
})

export class PatientStatisticsComponent implements OnInit {

    public patients: Patient[] = [];
    public ageGroups: number[] = [0, 0, 0, 0, 0, 0];
    public ageGroupsByDoctor: number[] = [0, 0, 0, 0, 0, 0];

    public male: number = 0;
    public female: number = 0;

    public doctors: Set<string>;
    public selectedDoctor: string = "";
    constructor(private patientService: PatientService, private router: Router) { }

    ngOnInit() : void {

        this.patientService.getAllPatients().subscribe(res => {
            
            this.patients = res;
            let doctors: string[] = [];
            this.patients.forEach(function(this:PatientStatisticsComponent, patient) { 
                doctors.push(patient.doctorId);
                if(patient.gender == "male"){
                    this.male += 1;
                }
                else{
                    this.female += 1;
                }
            });
            this.countByAgeGroup(this.ageGroups, this.patients);
            this.doctors = new Set<string>(doctors);
        });

        Chart.defaults.global.defaultFontSize = 25;
        Chart.defaults.global.defaultFontColor = '#000';
        
        var patientsByAgeChart = new Chart("patientsByAgeChart", {
            type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
            
            data: {
                labels: ['0-18', '18-35', '35-45', '45-55', '55-65', '65+'],
                datasets: [{
                    data: [this.ageGroups],
                    backgroundColor: [
                        '#86eba1',
                        '#86ebc6',
                        '#86cbeb',
                        '#8886eb',
                        '#9f86eb',
                        '#bf86eb',
                    ],
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: 2.5,
                    hoverBorderColor: '#000',
                    
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]   
                }
            }
        });

        var patientsByGenderChart = new Chart("patientsByGenderChart", {
            type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
            data: {
                labels: ['Musko', 'Zensko'],
                datasets: [{
                    data: [this.male, this.female],
                    backgroundColor: [
                        '#86cbeb',
                        '#bf86eb'
                    ],
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: 2.5,
                    hoverBorderColor: '#000',
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]   
                }
            }
        });

        var doctorsPatientsByGenderChart = new Chart("doctorPatientsByAgeChart", {
            type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
            
            data: {
                labels: ['0-18', '18-35', '35-45', '45-55', '55-65', '65+'],
                datasets: [{
                    data: [this.ageGroupsByDoctor],
                    backgroundColor: [
                        '#86eba1',
                        '#86ebc6',
                        '#86cbeb',
                        '#8886eb',
                        '#9f86eb',
                        '#bf86eb',
                    ],
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: 2.5,
                    hoverBorderColor: '#000',
                    
                }]
            },
            
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]   
                }
            }
        });
    }

    changeDoctor(e: any): void{
        this.ageGroupsByDoctor = [0, 0, 0, 0, 0, 0];
        if(this.selectedDoctor != ""){
            return;
        }
        var doctorsPatients = this.patients.filter(pat => pat.doctorId == this.selectedDoctor);
        this.countByAgeGroup(this.ageGroupsByDoctor, doctorsPatients);
    }

    countByAgeGroup(countInto: number[], countFrom: Patient[]){
        countFrom.forEach(function(patient) { 
            if(patient.age < 18){
                countInto[0] += 1;
            }
            else if(patient.age >= 18 && patient.age < 35){
                countInto[1] += 1;
            }
            else if(patient.age >= 35 && patient.age < 45){
                countInto[2] += 1;
            }
            else if(patient.age >= 45 && patient.age < 55){
                countInto[3] += 1;
            }
            else if(patient.age >= 55 && patient.age < 65){
                countInto[4] += 1;
            }
            else{
                countInto[5] += 1;
            }
        });
    }
}