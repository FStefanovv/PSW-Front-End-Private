import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { BloodSupplies } from '../../hospital/model/bloodSupplies.model';
import { BloodSubscriptionService } from '../../hospital/services/blood-sub.service';

@Component({
  selector: 'app-blood-supplies',
  templateUrl: './blood-supplies.component.html',
  styleUrls: ['./blood-supplies.component.css']
})
export class BloodSuppliesComponent implements OnInit {

  public supplies: BloodSupplies;
  

  constructor(private router: Router, private subService: BloodSubscriptionService) { }

  ngOnInit(): void {
    this.subService.GetSupplies().subscribe(res => {
      this.supplies = res;

    });

  }

  
}
