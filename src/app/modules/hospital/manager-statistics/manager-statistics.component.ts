import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerStatisticsService } from '../services/manager-statistics.service';

@Component({
  selector: 'app-manager-statistics',
  templateUrl: './manager-statistics.component.html',
  styleUrls: ['./manager-statistics.component.css']
})

export class ManagerStatisticsComponent {

  constructor(private statService: ManagerStatisticsService, private router: Router) { }

        // statisticsList[0] = number of steps and their occurences
        // statisticsList[1] = time spent on each step (in seconds) and their occurences
        // statisticsList[2] = how many times next was clicked in one session and occurences
        // statisticsList[3] = how many times schedule was clicked in one session and occurences
        // statisticsList[4] = how many times back was clicked in one session and occurences

 
}
