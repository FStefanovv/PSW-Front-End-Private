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

  public bloodRequestDTO: BloodRequestDTO = new BloodRequestDTO();
  
  groupA: number = 0;
  groupB: number = 0;
  groupAB: number = 0;
  groupO: number = 0;

  typeNull: boolean = false;
  amountNull: boolean = false;
  reasonNull: boolean = false;
  dateNull: boolean = false;

  constructor(private bloodService: BloodService,private router: Router) { }

  ngOnInit(): void {
   this.bloodService.getByGroupA().subscribe(res => { this.groupA = res; });
   this.bloodService.getByGroupB().subscribe(res => { this.groupB = res; });
   this.bloodService.getByGroupAB().subscribe(res => { this.groupAB = res; });
   this.bloodService.getByGroupO().subscribe(res=> { this.groupO = res; });
  }

  submitBloodRequest(){
    if(!this.isValidInputType()) this.typeNull = true;
    if(!this.isValidInputAmount()) this.amountNull = true;
    if(!this.isValidInputReason()) this.reasonNull = true;
    if(!this.isValidInputDate()) this.dateNull = true;
    if(this.typeNull === true || this.amountNull === true || this.reasonNull === true || this.dateNull === true ){
      return;
    }
    this.bloodService.sendBloodRequest(this.bloodRequestDTO).subscribe(
      res => {
        alert("Blood request successfully submited.");
      },error =>{
        alert("There was an error with sending your request.");
      });
  }

  isValidInputType(): boolean{
    this.typeNull = false;
    return this.bloodRequestDTO.type != '';
  }
  isValidInputAmount(): boolean{
    this.amountNull = false;
    return this.bloodRequestDTO.amount > 0;
  }
  isValidInputReason(): boolean{
    this.reasonNull = false;
    return this.bloodRequestDTO.reason != '';
  }
  isValidInputDate(): boolean{
    this.dateNull = false;
    return  this.bloodRequestDTO.due != '';
  }
}
