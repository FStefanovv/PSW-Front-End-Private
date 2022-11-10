import { Router } from '@angular/router';
import { BloodService } from './../services/blood.service';
import { BloodRequestDTO } from './../model/bloodRequestDTO.model';
import { Component } from "@angular/core";

@Component({
  selector: 'blood-request',
  templateUrl: './blood-request.component.html',
  styleUrls: ['./blood-request.component.html']
})
export class BloodRequestComponent{
  public bloodRequestDTO: BloodRequestDTO = new BloodRequestDTO()

  constructor(private bloodService: BloodService,private router: Router) { }

  public bloodRequest(){
    this.bloodService.sendBloodRequest(this.bloodRequestDTO).subscribe(res => {
      alert("Zahtev poslat")
    },error =>{
      alert("Zahtev nije poslat")
    })
  }
}