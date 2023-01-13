import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { HospitalManagerModule } from "./modules/hospital/hospital-manager.module";
import { HospitalDoctorModule } from "./modules/hospital/hospital-doctor.module";
import { PagesModule } from "./modules/pages/pages.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { IntegrationModule } from "./modules/integration/integration.module";
import { MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MyDialogComponent } from "./modules/hospital/my-dialog/my-dialog.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AuthInterceptor } from "./auth/auth.interceptor";
import { RoleGuardService } from "./auth/role-guard.service";
import { DoctorMenuComponent } from "./modules/pages/doctor-menu/doctor-menu.component";
import { ManagerMenuComponent } from "./modules/pages/manager-menu/manager-menu.component";
import { AuthGuardService } from "./auth/auth-guard.service";
import { ErrorIntercept } from "./modules/hospital/services/error.interceptor"; 
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    PopUpComponent,
    DoctorMenuComponent,
    ManagerMenuComponent,
    PopUpComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    PagesModule,
    MatRadioModule,
    CommonModule,
    HospitalManagerModule,
    HospitalDoctorModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    IntegrationModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    HospitalManagerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    RoleGuardService,
    AuthGuardService
  ],
  bootstrap: [AppComponent],
  entryComponents: [MyDialogComponent]
})
export class AppModule { }
