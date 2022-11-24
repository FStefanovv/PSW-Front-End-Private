import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DoctorHomeComponent } from "./modules/pages/doctor-home/doctor-home.component";
import { LoginComponent } from "./modules/pages/login/login.component";
import { ManagerHomeComponent } from "./modules/pages/manager-home/manager-home.component";


const routes: Routes = [
 
  { path: 'manager-home', component: ManagerHomeComponent },
  { path: 'doctor-home', component: DoctorHomeComponent },
  { path: '', component: LoginComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
