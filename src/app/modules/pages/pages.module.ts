import { HospitalDoctorModule } from './../hospital/hospital-doctor.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuardService } from '../../auth/role-guard.service';
import { SidebarComponent } from '../hospital/sidebar/sidebar.component'; 
import { NavbarComponent } from '../hospital/navbar/navbar.component'; 
import { BloodSubscriptionComponent } from './blood-subscription/blood-subscription.component';
import { BloodSuppliesComponent } from './blood-supplies/blood-supplies.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../material/material.module';

const routes: Routes = [

  {
    path: 'manager-home', component: ManagerHomeComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'MANAGER' }
  },
  {
    path: 'doctor-home', component: DoctorHomeComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'DOCTOR' }
  },
  { path: '', component: LoginComponent },
  { path: 'blood-subscription', component: BloodSubscriptionComponent },
  { path: 'blood-supplies', component: BloodSuppliesComponent }
];

@NgModule({
  declarations: [
    DoctorHomeComponent,
    ManagerHomeComponent,
    LoginComponent,
    BloodSubscriptionComponent,
    BloodSuppliesComponent,
    SidebarComponent,
    NavbarComponent,
   
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
    exports:[
      SidebarComponent,
    NavbarComponent
    ]
})
export class PagesModule { }
