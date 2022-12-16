import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { CreateRoomComponent } from "./create-room/create-room.component";
import { RoomDetailComponent } from "./room-detail/room-detail.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { UpdateRoomComponent } from "./update-room/update-room.component";
import { AppointmentsByDoctorComponent } from './appointments-by-doctor/appointments-by-doctor.component';
import { FeedbackComponent } from './feedback/feedback.component';
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
import { ReportMain } from "./report-main/report-main.component";
import { ReportStepOne } from "./report-step-one/report-step-one.component";
import { ReportNavigation } from "./report-nav-page/report-nav-page.component";
import { ReportStepTwo } from "./report-step-two/report-step-two.component";
import { ReportStepThree } from "./report-step-three/report-step-three.component";
import { ReportStepFour } from "./report-step-four/report-step-four.component";
import { ShowReportManagment } from "./show-report-managment/show-report-managment.component";
import { ShowReportDesciption } from "./show-report-description/show-report-desciption.component";
import { ShowReportDrugs } from "./show-report-drugs/show-report-drugs.component";
import { ShowReportPatient } from "./show-report-patient/show-report-patient.component";
import { ShowReportSymptoms } from "./show-report-symptoms/show-report-symptoms.component";
import { CreateConsiliumComponent } from './create-consilium/create-consilium.component';
import { PatientStatisticsComponent } from './patient-statistics/patient-statistics.component';
import { ShowConsiliumsComponent } from './show-consiliums/show-consiliums.component';
import { AppForOtherDocComponent } from './app-for-other-doc/app-for-other-doc.component';
import { VacationRequestsByDoctorComponent } from "./vacation-requests-by-doctor/vacation-requests-by-doctor.component";



const routes: Routes = [
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/add', component: CreateRoomComponent },
  { path: 'rooms/:id', component: RoomDetailComponent },  
  { path: 'rooms/:id/update', component: UpdateRoomComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'appointments/add', component: CreateAppointmentComponent},
  { path: 'appointments', component: AppointmentsByDoctorComponent},
  { path: 'bloodRecord/add', component: CreateBloodRecordComponent},
  { path: 'appointments/reschedule', component: RescheduleAppointmentComponent},
  { path: 'bloodRequest', component: BloodRequestComponent},
  { path: 'patients/treatments', component: PatientOnTreatmentComponent},
  { path: 'patients/discharge', component: DischargePatientComponent},
  { path: 'patients/treatments/update', component:UpdateTreatmentComponent},
  { path: 'vacations/urgent', component: CreateUrgentVacationComponent},
  { path: 'vacations/cancel', component: CancelVacationComponent},
  { path: 'patients/treatments/create', component: CreateTreatmentComponent},
  { path: 'reportdev',component: ReportMain},
  { path: 'showreportdev', component: ShowReportManagment},
  {path: 'patients/treatments/create', component: CreateTreatmentComponent},
  {path: 'consilium/create', component:CreateConsiliumComponent},
  {path: 'vacations-by-doctor', component: VacationRequestsByDoctorComponent},
  {path: 'app-for-other-doc', component:AppForOtherDocComponent}
 ];
 
 

@NgModule({
  declarations: [
    RoomsComponent,
    RoomDetailComponent,
    CreateRoomComponent,
    UpdateRoomComponent,
    AppointmentsByDoctorComponent,
    FeedbackComponent,
    MyDialogComponent,
    SearchComponent,
    CreateAppointmentComponent,
    MyDialogComponent,
    CreateBloodRecordComponent,
    RescheduleAppointmentComponent,
    BloodRequestComponent,
    PatientOnTreatmentComponent,
    VacationRequestsByDoctorComponent,
    DischargePatientComponent,
    UpdateTreatmentComponent,
    CreateUrgentVacationComponent,
    ShowAppointmentsUrgentVacationComponent,
    ShowDoctorsForChange,
    VacationRequestsByDoctorComponent,
    CancelVacationComponent,
    CreateTreatmentComponent,
    ReportMain,
    ReportStepOne,
    ReportNavigation,
    ReportStepTwo,
    ReportStepThree,
    ReportStepFour,
    ShowReportManagment,
    ShowReportDesciption,
    ShowReportDrugs,
    ShowReportPatient,
    ShowReportSymptoms,
    CreateConsiliumComponent,
    PatientStatisticsComponent,
    ShowConsiliumsComponent,
    AppForOtherDocComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule,
    CreateBloodRecordComponent
  ]
})
export class HospitalModule { }
