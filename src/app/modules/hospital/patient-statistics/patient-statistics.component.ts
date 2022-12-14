import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { FormsModule } from '@angular/forms';
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
import { Doctor } from '../model/doctor.model';
import { DoctorService } from '../services/doctor.service';
import { count } from 'rxjs';
//import * as Chart from 'chart.js';

@Component({
  selector: 'app-patient-statistics',
  templateUrl: './patient-statistics.component.html',
  styleUrls: ['./patient-statistics.component.css']
})

export class PatientStatisticsComponent implements OnInit {

  public patients: Patient[] = [];
  public doctors: Doctor[] = [];
  public ageGroups: number[] = [0, 0, 0, 0, 0, 0];
  public ageGroupsByDoctor: number[] = [0, 0, 0, 0, 0, 0];

  public patientsOfDoctor: Patient[] = [];

  public male: number = 0;
  public female: number = 0;

  public selectedDoctor: string = "";

  public patientsByAgeChart: Chart; 
  public patientsByGenderChart: Chart;
  public patientsOfDoctorByAgeChart: Chart;
  constructor(private patientService: PatientService, private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.patientService.getAllPatients().subscribe(res => {
      this.patients = res;
      this.countByAgeGroup(this.ageGroups, this.patients);
      [this.male, this.female] = this.countByGender(this.patients);
      this.patientsByAgeChart = this.constructPatientsByAgeChart();
      this.patientsByGenderChart = this.constructPatientsByGenderChart();
      this.patientsOfDoctorByAgeChart = this.constructPatientsOfDoctorByAgeChart();
      // var patientsByAgeChart = new Chart("patientsByAgeChart", {
      //   type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      //   data: {
      //     labels: ['0-18', '18-35', '35-45', '45-55', '55-65', '65+'],
      //     datasets: [{
      //       data: [this.ageGroups[0], this.ageGroups[1], this.ageGroups[2], this.ageGroups[3], this.ageGroups[4], this.ageGroups[5]],
      //       backgroundColor: [
      //         '#86eba1',
      //         '#86ebc6',
      //         '#86cbeb',
      //         '#8886eb',
      //         '#9f86eb',
      //         '#bf86eb',
      //       ],
      //       borderWidth: 1,
      //       borderColor: '#777',
      //       hoverBorderWidth: 2.5,
      //       hoverBorderColor: '#000',
      //     }]
      //   },
      //   options: {
      //     legend: {
      //       display: false
      //     },
      //     scales: {
      //       yAxes: [{
      //           ticks: {
      //               beginAtZero: true
      //           }
      //       }]   
      //     }
      //   }
      // });

      // var patientsByGenderChart = new Chart("patientsByGenderChart", {
      //   type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      //   data: {
      //       labels: ['Musko', 'Zensko'],
      //       datasets: [{
      //           //this.male, this.female
      //           data: [this.male, this.female],
      //           backgroundColor: [
      //               '#86cbeb',
      //               '#bf86eb'
      //           ],
      //           borderWidth: 1,
      //           borderColor: '#777',
      //           hoverBorderWidth: 2.5,
      //           hoverBorderColor: '#000',
      //       }]
      //   },
      //   options: {
      //       legend: {
      //           display: false
      //       },
      //       scales: {
      //           yAxes: [{
      //               ticks: {
      //                   beginAtZero: true
      //               }
      //           }]   
      //       }
      //   }
      // });

      // var patientsByAgeChart = new Chart("doctorPatientsByAgeChart", {
      //   type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      //   data: {
      //     labels: ['0-18', '18-35', '35-45', '45-55', '55-65', '65+'],
      //     datasets: [{
      //       data: [this.ageGroupsByDoctor[0], this.ageGroupsByDoctor[1], this.ageGroupsByDoctor[2], this.ageGroupsByDoctor[3], this.ageGroupsByDoctor[4], this.ageGroupsByDoctor[5]],
      //       backgroundColor: [
      //         '#86eba1',
      //         '#86ebc6',
      //         '#86cbeb',
      //         '#8886eb',
      //         '#9f86eb',
      //         '#bf86eb',
      //       ],
      //       borderWidth: 1,
      //       borderColor: '#777',
      //       hoverBorderWidth: 2.5,
      //       hoverBorderColor: '#000',
      //     }]
      //   },
      //   options: {
      //     legend: {
      //       display: false
      //     },
      //     scales: {
      //       yAxes: [{
      //           ticks: {
      //               beginAtZero: true
      //           }
      //       }]   
      //     }
      //   }
      // });  
  });

    this.doctorService.getDoctors().subscribe(res => {
      this.doctors = res;
    });

    Chart.defaults.global.defaultFontSize = 25;
    Chart.defaults.global.defaultFontColor = '#000';
  }

  changeDoctor(e: any){
    this.ageGroupsByDoctor = [0, 0, 0, 0, 0, 0];
      if(this.selectedDoctor == ""){
        return;
      }
      else{
        this.patientsOfDoctor = this.patients.filter(patient => patient.doctorID == this.selectedDoctor);
        this.countByAgeGroup(this.ageGroupsByDoctor, this.patientsOfDoctor);
        let newChartData = {
          datasets: [{
            data:[
              this.ageGroupsByDoctor[0],
              this.ageGroupsByDoctor[1],
              this.ageGroupsByDoctor[2],
              this.ageGroupsByDoctor[3],
              this.ageGroupsByDoctor[4],
              this.ageGroupsByDoctor[5]
            ]
          }]
        }
        this.patientsOfDoctorByAgeChart.data.datasets[0].data = this.ageGroupsByDoctor;
        this.patientsOfDoctorByAgeChart.update();
      }
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

  countByGender(countFrom: Patient[]){
    let male: number = 0;
    let female: number = 0;
    countFrom.forEach(function(patient) {
      if(patient.gender == 0){
        male += 1;
      }
      else {
        female += 1;
      }
    });
    return [male, female];
  }

  constructPatientsByAgeChart(){
    return new Chart("patientsByAgeChart", {
      type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data: {
        labels: ['0-18', '18-35', '35-45', '45-55', '55-65', '65+'],
        datasets: [{
          data: [this.ageGroups[0], this.ageGroups[1], this.ageGroups[2], this.ageGroups[3], this.ageGroups[4], this.ageGroups[5]],
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
  constructPatientsByGenderChart(){
    return new Chart("patientsByGenderChart", {
      type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data: {
          labels: ['Musko', 'Zensko'],
          datasets: [{
              //this.male, this.female
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
  }
  constructPatientsOfDoctorByAgeChart(){
    return new Chart("doctorPatientsByAgeChart", {
      type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data: {
        labels: ['0-18', '18-35', '35-45', '45-55', '55-65', '65+'],
        datasets: [{
          data: [this.ageGroupsByDoctor[0], this.ageGroupsByDoctor[1], this.ageGroupsByDoctor[2], this.ageGroupsByDoctor[3], this.ageGroupsByDoctor[4], this.ageGroupsByDoctor[5]],
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
}