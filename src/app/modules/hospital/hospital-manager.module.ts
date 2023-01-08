import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { CreateRoomComponent } from "./create-room/create-room.component";
import { RoomDetailComponent } from "./room-detail/room-detail.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { UpdateRoomComponent } from "./update-room/update-room.component";;
import { FeedbackComponent } from './feedback/feedback.component';
import { PatientStatisticsComponent } from "./patient-statistics/patient-statistics.component";
import { RoleGuardService } from "src/app/auth/role-guard.service";
import { ManagerStatisticsComponent } from "./manager-statistics/manager-statistics.component";

const routes: Routes = [
  {
    path: 'rooms', component: RoomsComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'MANAGER' } },
  {
    path: 'rooms/add', component: CreateRoomComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'MANAGER' } },
  {
    path: 'rooms/:id', component: RoomDetailComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'MANAGER' }
  },
  {
    path: 'rooms/:id/update', component: UpdateRoomComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'MANAGER' }
  },
  {
    path: 'feedback', component: FeedbackComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'MANAGER' }
  },
  {
    path: 'patient-statistics', component: PatientStatisticsComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'MANAGER' }
  },

  {
    path: 'manager-statistics', component: ManagerStatisticsComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'MANAGER' }
  },
 ];
 
 

@NgModule({
  declarations: [
    RoomsComponent,
    RoomDetailComponent,
    CreateRoomComponent,
    UpdateRoomComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HospitalManagerModule { }
