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
  typeNull: boolean = false
  amountNull: boolean = false
  reasonNull: boolean = false
  dateNull: boolean = false
  constructor(private bloodService: BloodService,private router: Router) { }

  public bloodRequest(){
    if(!this.isValidInputType()) this.typeNull = true
    if(!this.isValidInputAmount()) this.amountNull = true
    if(!this.isValidInputReason()) this.reasonNull = true
    if(!this.isValidInputDate()) this.dateNull = true
    if(this.typeNull === true || this.amountNull === true || this.reasonNull === true || this.dateNull === true ) return
    this.bloodService.sendBloodRequest(this.bloodRequestDTO).subscribe(res => {
      alert("Zahtev poslat")
    },error =>{
      alert("Los zahtev")
    })
    this.router.navigate(['doctor-home']);
  }

  private isValidInputType(): boolean{
    this.typeNull = false
    return this.bloodRequestDTO.type != ''
  }
  private isValidInputAmount(): boolean{
    this.amountNull = false
    return this.bloodRequestDTO.amount > 0
  }
  private isValidInputReason(): boolean{
    this.reasonNull = false
    return this.bloodRequestDTO.reason != ''
  }
  private isValidInputDate(): boolean{
    this.dateNull = false
    return  this.bloodRequestDTO.due != ''
  }
}
