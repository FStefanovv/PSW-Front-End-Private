import { PatientStatisticsComponent } from './patient-statistics/patient-statistics.component';
import { ShowConsiliumsComponent } from './show-consiliums/show-consiliums.component';
import { PagesModule } from './../pages/pages.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { AppointmentsByDoctorComponent } from './appointments-by-doctor/appointments-by-doctor.component';
import { CreateAppointmentComponent } from "./create-appointment/create-appointment.component";
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { SearchComponent } from './search/search.component';
import { CreateBloodRecordComponent } from './create-blood-record/create-blood-record.component';
import { RescheduleAppointmentComponent } from "./reschedule-appointment/reschedule-appointment.component";
import { BloodRequestComponent } from "./blood-request/blood-request.component";
import { PatientOnTreatmentComponent } from './patient-on-treatment/patient-on-treatment.component';
import { DischargePatientComponent } from './discharge-patient/discharge-patient.component';
import { UpdateTreatmentComponent } from './update-treatment/update-treatment.component';
import { CreateUrgentVacationComponent } from "./create-urgent-vacation/create-urgent-vacation.component";
import { ShowAppointmentsUrgentVacationComponent } from "./show-appointments-urgent-vacation/show-appointments-urgent-vacation.component";
import { ShowDoctorsForChange } from "./show-doctors-for-change/show-doctors-for-change.component";
import { CancelVacationComponent } from "./cancel-vacation/cancel-vacation.component";
import { CreateTreatmentComponent } from './create-treatment/create-treatment.component';
import { VacationRequestsByDoctorComponent } from "./vacation-requests-by-doctor/vacation-requests-by-doctor.component";
import { RoleGuardService } from "../../auth/role-guard.service";
import { SearchBloodIntegration } from "./search-blood-integration/search-blood-integration.component";
import { SearchReportsAndPrescriptionsComponent } from "./search-reps-and-prescs/search-reps-and-prescs.component";
import { ViewPatientDataComponent } from './view-patient-data/view-patient-data.component';
import { HospitalModule } from "./hospital.module";

const routes: Routes = [
  {
    path: 'appointments/add', component: CreateAppointmentComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'DOCTOR' }
  },
  {
    path: 'appointments', component: AppointmentsByDoctorComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'DOCTOR' }  },
  {
    path: 'bloodRecord/add', component: CreateBloodRecordComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'DOCTOR' }
  },
  {
    path: 'appointments/reschedule', component: RescheduleAppointmentComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'DOCTOR' }  },
  {
    path: 'bloodRequest', component: BloodRequestComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'DOCTOR' }  },
  {
    path: 'patients/treatments', component: PatientOnTreatmentComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'DOCTOR' }  },
  {
    path: 'patients/discharge', component: DischargePatientComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'DOCTOR' }  },
  
    
  {
    path: 'vacations/urgent', component: CreateUrgentVacationComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'DOCTOR' }  },
  {
    path: 'vacations/cancel', component: CancelVacationComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'DOCTOR' }  },
  {
    path: 'patients/treatments/create', component: CreateTreatmentComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'DOCTOR' }  },
  {
    path: 'appointments-by-doctor', component: AppointmentsByDoctorComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'DOCTOR' }  },
  {
    path: 'vacation-requests-by-doctor', component: VacationRequestsByDoctorComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'DOCTOR' }  },
  {  path: 'search-blood-integration', component: SearchBloodIntegration,
  canActivate: [RoleGuardService], data: { expectedRole: 'DOCTOR' }   },
  {  path: 'search-reports', component: SearchReportsAndPrescriptionsComponent,
  canActivate: [RoleGuardService], data: { expectedRole: 'DOCTOR' }   },
  {  path: 'show-consiliums', component: ShowConsiliumsComponent,
  canActivate: [RoleGuardService], data: { expectedRole: 'DOCTOR' }   },
  {path: 'vacations-by-doctor', component: VacationRequestsByDoctorComponent,
  canActivate: [RoleGuardService], data: { expectedRole: 'DOCTOR' } },
  { path: 'view-patient-data', component: ViewPatientDataComponent,
  canActivate: [RoleGuardService], data: { expectedRole: 'DOCTOR' } },
  

];



@NgModule({
  declarations: [
    AppointmentsByDoctorComponent,
    SearchComponent,
    CreateAppointmentComponent,
    MyDialogComponent,
    CreateBloodRecordComponent,
    RescheduleAppointmentComponent,
    BloodRequestComponent,
    PatientOnTreatmentComponent,
    DischargePatientComponent,
    CreateUrgentVacationComponent,
    CreateTreatmentComponent,
    SearchBloodIntegration,
    SearchReportsAndPrescriptionsComponent,
    ShowAppointmentsUrgentVacationComponent,
    ShowDoctorsForChange,
    ShowConsiliumsComponent,
    VacationRequestsByDoctorComponent,
    PatientStatisticsComponent,
    ViewPatientDataComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    PagesModule
  ],
  exports: [RouterModule, CreateBloodRecordComponent]
})
export class HospitalDoctorModule { }
