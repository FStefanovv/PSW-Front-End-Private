import { Component, OnInit } from '@angular/core';
import { BackendService } from 'angular-in-memory-web-api';
import {BloodBank} from '../models/blood-bank'
import {FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms'
import { BloodBankService } from '../services/blood-bank.service';
import {PopUpComponent} from "../../../pop-up/pop-up.component";

@Component({
  selector: 'app-register-blood-bank',
  templateUrl: './register-blood-bank.component.html',
  styleUrls: ['./register-blood-bank.component.css']
})
export class RegisterBloodBankComponent implements OnInit {
  title='ReactivForms'
  reactiveForm:FormGroup;
  public bb: BloodBank = new BloodBank()
  constructor(private BloodBankService:BloodBankService) { }

  ngOnInit(): void {
       this.reactiveForm= new FormGroup({

                 name: new FormControl("", Validators.required),
                 path: new FormControl("", Validators.required),
                 email: new FormControl("", Validators.required)




       });
  }
  onSubmit(){

    console.log(this.bb);
    this.BloodBankService.registerNewbBoodBank(this.bb)

    .subscribe({
        next : response =>
        {
          this.bb = response
          console.log(this.bb)
        },
        error : message => {

          console.log(message)
          alert(message)
        }
      }
    )

  }

}
