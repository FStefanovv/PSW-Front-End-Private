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


const routes: Routes = [
  { path: 'appointments/add', component: CreateAppointmentComponent },
  { path: 'appointments', component: AppointmentsByDoctorComponent },
  { path: 'bloodRecord/add', component: CreateBloodRecordComponent },
  { path: 'appointments/reschedule', component: RescheduleAppointmentComponent },
  { path: 'bloodRequest', component: BloodRequestComponent },
  { path: 'patients/treatments', component: PatientOnTreatmentComponent },
  { path: 'patients/discharge', component: DischargePatientComponent },
  { path: 'patients/treatments/update', component: UpdateTreatmentComponent },
  { path: 'vacations/urgent', component: CreateUrgentVacationComponent },
  { path: 'vacations/cancel', component: CancelVacationComponent },
  { path: 'patients/treatments/create', component: CreateTreatmentComponent },
  { path: 'appointments-by-doctor', component: AppointmentsByDoctorComponent },
  { path: 'vacation-requests-by-doctor', component: VacationRequestsByDoctorComponent }

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
    UpdateTreatmentComponent,
    CreateUrgentVacationComponent,
    ShowAppointmentsUrgentVacationComponent,
    ShowDoctorsForChange,
    CancelVacationComponent,
    CreateTreatmentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, CreateBloodRecordComponent]
})
export class HospitalDoctorModule { }
