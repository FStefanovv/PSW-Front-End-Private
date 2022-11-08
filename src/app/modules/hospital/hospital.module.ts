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
import { CreateAppointmentComponent } from "./create-appointment/create-appointment.component";
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { SearchComponent } from './search/search.component';
import { CreateBloodRecordComponent } from './create-blood-record/create-blood-record.component';
import { RescheduleAppointmentComponent } from "./reschedule-appointment/reschedule-appointment.component";

const routes: Routes = [
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/add', component: CreateRoomComponent },
  { path: 'rooms/:id', component: RoomDetailComponent },  
  { path: 'rooms/:id/update', component: UpdateRoomComponent },
  { path: 'appointments/add', component: CreateAppointmentComponent},
  { path: 'appointments', component: AppointmentsByDoctorComponent},
  { path: 'bloodRecord/add', component: CreateBloodRecordComponent},
  { path: 'appointments/reschedule', component: RescheduleAppointmentComponent}
];

@NgModule({
  declarations: [
    RoomsComponent,
    RoomDetailComponent,
    CreateRoomComponent,
    UpdateRoomComponent,
    AppointmentsByDoctorComponent,
    MyDialogComponent,
    SearchComponent,
    CreateAppointmentComponent,
    MyDialogComponent,
    CreateBloodRecordComponent,
    RescheduleAppointmentComponent
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
