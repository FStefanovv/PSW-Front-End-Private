import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Patient } from '../model/patient.model';
import { AuthService } from '../services/auth.service';
import { Chart } from 'chart.js';
import { AppointmentService } from '../services/appointment.service';
import { DoctorService } from '../services/doctor.service';
import { PatientHealthMeasurements } from '../model/patientHealthMeasurements.model';
import { getPatientHealthMeasurementsDTO } from '../model/getPatientHealthMeasurementsDTO.model';



@Component({
  selector: 'app-view-patient-data',
  templateUrl: './view-patient-data.component.html',
  styleUrls: ['./view-patient-data.component.css']
})
export class ViewPatientDataComponent implements OnInit {

  public patientMonthlyWeight: Chart;
  public patientMonthlyUpperBloodPressure: Chart;
  public patientMonthlyLowerBloodPressure: Chart;
  public patientMonthlyHeartbeat: Chart;
  public patientMonthlyTemperature: Chart;
  public patientMonthlyBloodSugarLevel: Chart;
  public loggedDoctorId: string;
  public doctorsPatients: Patient[] = [];
  public selectedMonth: string = "";
  public selectedPatient: string = "";
  public measurements: PatientHealthMeasurements[] = [];
  public getDTO: getPatientHealthMeasurementsDTO = new getPatientHealthMeasurementsDTO();
  public chartLabels: string[] = [];
  public weightData: number[] = [];
  public bloodPressureUpperData: number[] = [];
  public bloodPressureLowerData: number[] = [];
  public heartbeatData: number[] = [];
  public temperatureData: number[] = [];
  public bloodSugarLevelData: number[] = [];

  constructor(private appointmentService: AppointmentService, 
              private patientService: PatientService, 
              private authService: AuthService, 
              private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.loggedDoctorId = this.authService.getIdByRole();
    this.appointmentService.getDoctorsPatients(parseInt(this.loggedDoctorId)).subscribe( res => {
      this.doctorsPatients = res;  
    });
    
    this.patientMonthlyWeight = this.constructPatientMonthlyWeightChart();
    this.patientMonthlyUpperBloodPressure = this.constructPatientMonthlyUpperBloodPressureChart();
    this.patientMonthlyLowerBloodPressure = this.constructPatientMonthlyLowerBloodPressureChart();
    this.patientMonthlyHeartbeat = this.constructPatientMonthlyHeartbeatChart();
    this.patientMonthlyTemperature = this.constructPatientMonthlyTemperatureChart();
    this.patientMonthlyBloodSugarLevel = this.constructPatientMonthlyBloodSugarLevelChart();
  }

  onMonthOrPatientChange(e: any){
    if(this.selectedMonth != "" && this.selectedPatient != ""){
      this.getDTO.month = this.selectedMonth;
      this.getDTO.patientId = this.selectedPatient;
      // this.chartLabels = [];
      // this.weightData = [];
      // this.bloodPressureUpperData = [];
      // this.bloodPressureLowerData = [];
      // this.heartbeatData = [];
      // this.temperatureData = [];
      // this.bloodSugarLevelData = [];
      this.doctorService.getPatientHealthMeasurements(this.getDTO).subscribe( res => {

        this.measurements = res;
        
        for(let measurement of this.measurements){
          this.chartLabels.push(measurement.measurementTime.slice(0, 10));
          this.weightData.push(measurement.weight);
          this.bloodPressureUpperData.push(measurement.bloodPressureUpper);
          this.bloodPressureLowerData.push(measurement.bloodPressureLower);
          this.heartbeatData.push(measurement.heartbeat);
          this.temperatureData.push(measurement.temperature);
          this.bloodSugarLevelData.push(measurement.bloodSugarLevel);
        }
        console.log(this.measurements);
        this.updateChartData(this.patientMonthlyWeight, this.chartLabels, this.weightData);
        this.updateChartData(this.patientMonthlyUpperBloodPressure, this.chartLabels, this.bloodPressureUpperData);
        this.updateChartData(this.patientMonthlyLowerBloodPressure, this.chartLabels, this.bloodPressureLowerData);
        this.updateChartData(this.patientMonthlyHeartbeat, this.chartLabels, this.heartbeatData);
        this.updateChartData(this.patientMonthlyTemperature, this.chartLabels, this.temperatureData);
        this.updateChartData(this.patientMonthlyBloodSugarLevel, this.chartLabels, this.bloodSugarLevelData);
      });

      // this.patientMonthlyWeight.data.datasets[0].data = this.weightData;
      // this.patientMonthlyWeight.data.labels = this.chartLabels;
      // this.patientMonthlyWeight.update();
      // this.patientMonthlyUpperBloodPressure.data.datasets[0].data = this.bloodPressureUpperData;
      // this.patientMonthlyUpperBloodPressure.data.labels = this.chartLabels;
      // this.patientMonthlyUpperBloodPressure.update();
      // this.patientMonthlyLowerBloodPressure.data.datasets[0].data = this.bloodPressureLowerData;
      // this.patientMonthlyLowerBloodPressure.update();
      // this.patientMonthlyHeartbeat.data.datasets[0].data = this.heartbeatData;
      // this.patientMonthlyHeartbeat.update();
      // this.patientMonthlyTemperature.data.datasets[0].data = this.temperatureData;
      // this.patientMonthlyTemperature.update();
      // this.patientMonthlyBloodSugarLevel.data.datasets[0].data = this.bloodSugarLevelData;
      // this.patientMonthlyBloodSugarLevel.update();
    }
    else{
      this.chartLabels = [];
      this.weightData = [];
      this.bloodPressureUpperData = [];
      this.bloodPressureLowerData = [];
      this.heartbeatData = [];
      this.temperatureData = [];
      this.bloodSugarLevelData = [];
      this.updateChartData(this.patientMonthlyWeight, this.chartLabels, this.weightData);
      this.updateChartData(this.patientMonthlyUpperBloodPressure, this.chartLabels, this.bloodPressureUpperData);
      this.updateChartData(this.patientMonthlyLowerBloodPressure, this.chartLabels, this.bloodPressureLowerData);
      this.updateChartData(this.patientMonthlyHeartbeat, this.chartLabels, this.heartbeatData);
      this.updateChartData(this.patientMonthlyTemperature, this.chartLabels, this.temperatureData);
      this.updateChartData(this.patientMonthlyBloodSugarLevel, this.chartLabels, this.bloodSugarLevelData);
      return;
    }
  }

  updateChartData(chart: Chart, labels: string[], data: number[]){
    chart.data.labels = labels;
    chart.data.datasets[0].data = data;
    chart.update();
  }

  constructPatientMonthlyWeightChart(){
    return new Chart("patientMonthlyWeight", {
      type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data: {
        labels: [],
        datasets: [{
          data: [],
          borderWidth: 1,
          backgroundColor: "#38A3A5",
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
  constructPatientMonthlyUpperBloodPressureChart(){
    return new Chart("patientMonthlyUpperBloodPressure", {
      type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data: {
        labels: [],
        datasets: [{
          data: [],
          borderWidth: 1,
          backgroundColor: "#38A3A5",
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
  constructPatientMonthlyLowerBloodPressureChart(){
    return new Chart("patientMonthlyLowerBloodPressure", {
      type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data: {
        labels: [],
        datasets: [{
          data: [],
          borderWidth: 1,
          backgroundColor: "#38A3A5",
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
  constructPatientMonthlyHeartbeatChart(){
    return new Chart("patientMonthlyHeartbeat", {
      type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data: {
        labels: [],
        datasets: [{
          data: [],
          borderWidth: 1,
          backgroundColor: "#38A3A5",
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
  constructPatientMonthlyTemperatureChart(){
    return new Chart("patientMonthlyTemperature", {
      type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data: {
        labels: [],
        datasets: [{
          data: [],
          borderWidth: 1,
          backgroundColor: "#38A3A5",
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
  constructPatientMonthlyBloodSugarLevelChart(){
    return new Chart("patientMonthlyBloodSugarLevel", {
      type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data: {
        labels: [],
        datasets: [{
          data: [],
          borderWidth: 1,
          backgroundColor: "#38A3A5",
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
