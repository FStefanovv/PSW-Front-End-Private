import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterBloodBankComponent } from './register-blood-bank/register-blood-bank.component';

import { ConfigurationComponent } from './Configuration/configuration.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
 
  { path: 'register-blood-bank', component: RegisterBloodBankComponent },
  { path: 'configuration', component: ConfigurationComponent }
];

@NgModule({
  declarations: [
    RegisterBloodBankComponent,
    ConfigurationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class IntegrationModule { }
