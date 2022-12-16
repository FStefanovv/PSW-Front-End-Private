import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';

import { BB, BloodBank, ReportDTO } from '../models/blood-bank';
import { BloodBankService } from '../services/blood-bank.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})


export class ConfigurationComponent implements OnInit {




  contactForm:FormGroup;
  public periodlist=[
    'Daily',
    'Monthly',
    'Every Two Months'
  ]
  public listbb:BB[];
  public repobj: ReportDTO = new ReportDTO()

  constructor(private BloodBankService:BloodBankService) {
  }

  ngOnInit() {
    this.BloodBankService.getAll()
      .subscribe(
        (data) =>
        {
          this.listbb = data
        });
    console.log(this.listbb);

    this.contactForm =  new FormGroup({
      bbank: new FormControl(null, Validators.required),
      periodd: new FormControl(null, Validators.required)
    });
  }

  submit() {
    let bankId = this.contactForm.get('bbank').value;
    let perr = this.contactForm.get('periodd').value;
    if(perr=='Every Two Months'){
      perr='EveryTwoMonths'
    }
    this.repobj.id=bankId;
    this.repobj.period=perr;
    console.log(perr);
    console.log("Form Submitted")
    console.log(this.contactForm.value)
    this.BloodBankService.configureReport(this.repobj)
      .subscribe(
        (data) =>
        {
          console.log(data)
        });


  }

}
