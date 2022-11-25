import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import { AppointmentsByDoctorComponent } from "./modules/hospital/appointments-by-doctor/appointments-by-doctor.component";
import { FeedbackComponent } from "./modules/hospital/feedback/feedback.component"
import{RegisterBloodBankComponent} from "./modules/integration/register-blood-bank/register-blood-bank.component";
import { VacationRequestsByDoctorComponent } from "./modules/hospital/vacation-requests-by-doctor/vacation-requests-by-doctor.component";
import { PatientStatisticsComponent } from "./modules/hospital/patient-statistics/patient-statistics.component";
import { PatientProfileComponent } from "./modules/hospital/patient-profile/patient-profile.component";

const routes: Routes = [
  { path: '', redirectTo: '/appointments-by-doctor', pathMatch: 'full' },
  { path: 'appointments-by-doctor', component: AppointmentsByDoctorComponent},
  { path: 'home', component: HomeComponent },
  { path: 'vacation-requests-by-doctor', component: VacationRequestsByDoctorComponent},
  { path: 'patient-statistics', component: PatientStatisticsComponent },
  { path: 'feedback', component: FeedbackComponent },
  {path:'register-blood-bank', component:RegisterBloodBankComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
