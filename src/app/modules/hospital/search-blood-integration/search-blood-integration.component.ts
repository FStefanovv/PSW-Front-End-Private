import { BloodBank } from './../../integration/models/blood-bank';
import { Component } from "@angular/core";
import { BloodService } from '../services/blood.service';

@Component({
  selector: 'search-blood-integration',
  templateUrl: './search-blood-integration.component.html',
})
export class SearchBloodIntegration{
  public bloodBanks: Array<BloodBank> = []
  constructor(private bloodService: BloodService) {}

  ngOnInit(){
    this.bloodService.getFromIntegrationApi().subscribe(res => {
      this.bloodBanks = res
      console.log(res)
    })
  }
}