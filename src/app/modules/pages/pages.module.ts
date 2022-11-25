import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DoctorHomeComponent,
    ManagerHomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class PagesModule { }
