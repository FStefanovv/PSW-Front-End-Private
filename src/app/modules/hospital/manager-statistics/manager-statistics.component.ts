import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-statistics',
  templateUrl: './manager-statistics.component.html',
  styleUrls: ['./manager-statistics.component.css']
})

export class ManagerStatisticsComponent {

 

  constructor(private statService: ManagerStatisticsService, private router: Router) { }

 

 
}
