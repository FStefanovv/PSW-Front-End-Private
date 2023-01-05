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

const routes: Routes = [

  {
    path: 'manager-home', component: ManagerHomeComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'MANAGER' }  },
  {
    path: 'doctor-home', component: DoctorHomeComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'DOCTOR' }  },
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    DoctorHomeComponent,
    ManagerHomeComponent,
    LoginComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forChild(routes),
  ],
    exports:[
      SidebarComponent,
    NavbarComponent
    ]
})
export class PagesModule { }
