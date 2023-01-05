import { AppForOtherDocComponent } from './modules/hospital/app-for-other-doc/app-for-other-doc.component';
import { CreateTreatmentComponent } from './modules/hospital/create-treatment/create-treatment.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppointmentsByDoctorComponent } from "./modules/hospital/appointments-by-doctor/appointments-by-doctor.component";
import { FeedbackComponent } from "./modules/hospital/feedback/feedback.component"
import{RegisterBloodBankComponent} from "./modules/integration/register-blood-bank/register-blood-bank.component";
//import { ConfigurationComponent } from './modules/integration/configuration/configuration.component';
import { VacationRequestsByDoctorComponent } from "./modules/hospital/vacation-requests-by-doctor/vacation-requests-by-doctor.component";
import { PatientStatisticsComponent } from "./modules/hospital/patient-statistics/patient-statistics.component";
import { DoctorHomeComponent } from "./modules/pages/doctor-home/doctor-home.component";
import { LoginComponent } from "./modules/pages/login/login.component";
import { ManagerHomeComponent } from "./modules/pages/manager-home/manager-home.component";
import { CommonModule } from "@angular/common";
import { ShowConsiliumsComponent } from "./modules/hospital/show-consiliums/show-consiliums.component";
import { BloodRequestComponent } from "./modules/hospital/blood-request/blood-request.component";
import { SearchReportsAndPrescriptionsComponent } from "./modules/hospital/search-reps-and-prescs/search-reps-and-prescs.component";
import { CreateBloodRecordComponent } from "./modules/hospital/create-blood-record/create-blood-record.component";
import { PatientOnTreatmentComponent } from './modules/hospital/patient-on-treatment/patient-on-treatment.component';
import { SearchBloodIntegration } from './modules/hospital/search-blood-integration/search-blood-integration.component';
import { RoomsComponent } from './modules/hospital/rooms/rooms.component';
import { CreateRoomComponent } from './modules/hospital/create-room/create-room.component';
import { RoomDetailComponent } from './modules/hospital/room-detail/room-detail.component';
import { UpdateRoomComponent } from './modules/hospital/update-room/update-room.component';
import { CreateAppointmentComponent } from './modules/hospital/create-appointment/create-appointment.component';
import { RescheduleAppointmentComponent } from './modules/hospital/reschedule-appointment/reschedule-appointment.component';
import { DischargePatientComponent } from './modules/hospital/discharge-patient/discharge-patient.component';
import { UpdateTreatmentComponent } from './modules/hospital/update-treatment/update-treatment.component';
import { CreateUrgentVacationComponent } from './modules/hospital/create-urgent-vacation/create-urgent-vacation.component';
import { CancelVacationComponent } from './modules/hospital/cancel-vacation/cancel-vacation.component';
import { ReportMain } from './modules/hospital/report-main/report-main.component';
import { ShowReportManagment } from './modules/hospital/show-report-managment/show-report-managment.component';
import { CreateConsiliumComponent } from './modules/hospital/create-consilium/create-consilium.component';


const routes: Routes = [
  { path: 'appointments-by-doctor', component: AppointmentsByDoctorComponent},
  //{ path: 'home', component: HomeComponent },
  { path: 'patient-statistics', component: PatientStatisticsComponent },
  { path: 'vacation-requests-by-doctor', component: VacationRequestsByDoctorComponent},
  { path: 'feedback', component: FeedbackComponent },
  {path:'register-blood-bank', component:RegisterBloodBankComponent},
  { path: 'manager-home', component: ManagerHomeComponent },
  { path: 'doctor-home', component: DoctorHomeComponent },
  //ovde mi izlazi greska jer je vec definisano u integration module, mozete slobodno samo tamo stavljati putanje za integracije jer imamo child routes ukljucen
 // {path:'configuration', component:ConfigurationComponent},
  { path: '', component: LoginComponent },
  { path: 'show-consiliums', component : ShowConsiliumsComponent},
  { path: 'bloodRequest', component : BloodRequestComponent},
  { path: 'search-reports', component: SearchReportsAndPrescriptionsComponent},
  { path: 'bloodRecord/add', component: CreateBloodRecordComponent},
  { path: 'patients/treatments', component: PatientOnTreatmentComponent},
  { path: 'search-blood-integration', component: SearchBloodIntegration},
  { path: 'rooms/:id/update', component: UpdateRoomComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'rooms/:id', component: RoomDetailComponent},
  {path: 'appointments/reschedule', component: RescheduleAppointmentComponent},
  {path: 'patients/discharge', component: DischargePatientComponent},
  {path: 'vacations/urgent', component: CreateUrgentVacationComponent},
  {path: 'rooms/add', component: CreateRoomComponent},
  {path: 'bloodRecord/add', component: CreateBloodRecordComponent},
  {path: 'appointments/add', component: CreateAppointmentComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
