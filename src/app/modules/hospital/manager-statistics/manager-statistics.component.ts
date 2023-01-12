import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerStatisticsService } from '../services/manager-statistics.service';
import { MatTableDataSource } from '@angular/material/table';
import { TableEntry } from '../model/tableEntry.model';
import { StatisticEntry } from '../model/statisticEntry.model';
import { DataPoint } from '../model/dataPoint.model';
import { Chart} from 'chart.js';


@Component({
  selector: 'app-manager-statistics',
  templateUrl: './manager-statistics.component.html',
  styleUrls: ['./manager-statistics.component.css']
})

export class ManagerStatisticsComponent implements OnInit {

  constructor(private statService: ManagerStatisticsService, private router: Router) { }

  public numOfSteps: StatisticEntry[] = [];
  public timeSpentOnSession: StatisticEntry[] = [];
  public x1 = [];
  public y1 = [];
  public x2 = [];
  public y2 = [];
  public dataSource = new MatTableDataSource<TableEntry>();
  public displayedColumns = ['eventName','min', 'max', 'total'];

  ngOnInit(): void {

    this.statService.getStats().subscribe(res => {
     
      this.numOfSteps = res[0];
      this.x1 = [];
      this.y1 = [];
      this.numOfSteps.forEach(obj => {
        this.x1.push(obj.dataPoint);
        this.y1.push(obj.occurences);
      });

      this.timeSpentOnSession = res[1];
      this.x2 = [];
      this.y2 = [];
      this.timeSpentOnSession.forEach(obj => {
        this.x2.push(obj.dataPoint);
        this.y2.push(obj.occurences);
      });

      this.InitializeCharts();
    });
     
     this.statService.getTableStats().subscribe(res => {   
      this.dataSource.data = res;
     });

  }

  InitializeCharts() {
    var chart1 = new Chart("myChart1", {
      type: 'line',
      data: {
        labels: this.x1,
        datasets: [{
            borderColor: 'rgb(252, 126, 30)',
            label: 'Rate of steps by session',
            data: this.y1
          }]
      }
    });
    chart1.render();

    var chart2 = new Chart("myChart2", {
      type: 'line',
      data: {
        labels: this.x2,
        datasets: [
          {
            borderColor: 'rgb(64, 61, 203)',
            label: 'Rate of times spent in session',
            data: this.y2
          }
          ]
      }
    });
    chart2.render();
    
  }
  
	
 
  
}
