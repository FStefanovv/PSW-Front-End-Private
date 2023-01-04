import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent{
  @Input() homeBool:boolean=false
  @Input() consiliumsBool:boolean=false
  @Input() bloodRequestsBool:boolean=false
  @Input() bloodRecordBool:boolean=false
  @Input() vacationsBool:boolean=false
  @Input() patientTreatmentsBool:boolean=false
  @Input() patientStatisticsBool:boolean=false
  @Input() appointmentsBool:boolean=false
  @Input() searchBloodBanksBool:boolean=false
  @Input() searchReportsAndPrescriptionsBool:boolean=false
  constructor(private router: Router){

  }
  home(){
    this.router.navigate(['/doctor-home'])
  }
  consilium(){
    this.router.navigate(['show-consiliums'])
  }
  bloodRequest(){
    this.router.navigate(['bloodRequest'])
  }
  bloodRecord(){
    this.router.navigate(['/vacations-by-doctor'])
  }
  vacations(){
    this.router.navigate(['/vacations-by-doctor'])
  }
  patientTreatment(){
    this.router.navigate(['/doctor-home'])
  }
  patientStatistics(){
    this.router.navigate(['/doctor-home'])
  }
  appointments(){
    this.router.navigate(['/doctor-home'])
  }
  searchBloodBank(){
    this.router.navigate(['/doctor-home'])
  }
  searchReports(){
    this.router.navigate(['/doctor-home'])
  }
  logOut(){
    this.router.navigate(['/doctor-home'])
  }
}