import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { HospitalModule } from "./modules/hospital/hospital.module";
import { PagesModule } from "./modules/pages/pages.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
<<<<<<< HEAD
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { IntegrationModule } from "./modules/integration/integration.module";
import { MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
=======
import { MatDialogModule} from '@angular/material/dialog' ;
import { MyDialogComponent } from "./modules/hospital/my-dialog/my-dialog.component";
import { FormsModule } from '@angular/forms';
>>>>>>> 1338d49c5d196bdd82f5be7b60b94b3a64f9b9e1


import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorIntercept } from "./modules/hospital/services/error.interceptor"; 

@NgModule({
  declarations: [
    AppComponent,
    PopUpComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    PagesModule,
    HospitalModule,
    MatRadioModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule,
    IntegrationModule,
    MatDialogModule
=======
    MatDialogModule,
    FormsModule
>>>>>>> 1338d49c5d196bdd82f5be7b60b94b3a64f9b9e1
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorIntercept,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [MyDialogComponent]
})
export class AppModule { }
