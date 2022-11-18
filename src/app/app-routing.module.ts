import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import { AppointmentsByDoctorComponent } from "./modules/hospital/appointments-by-doctor/appointments-by-doctor.component";
import { VacationRequestsByDoctorComponent } from "./modules/hospital/vacation-requests-by-doctor/vacation-requests-by-doctor.component";


const routes: Routes = [
  { path: '', redirectTo: '/appointments-by-doctor', pathMatch: 'full' },
  { path: 'appointments-by-doctor', component: AppointmentsByDoctorComponent},
  { path: 'home', component: HomeComponent },
  { path: 'vacation-requests-by-doctor', component: VacationRequestsByDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
