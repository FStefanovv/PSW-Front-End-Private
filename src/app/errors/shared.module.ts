import { NgModule } from '@angular/core';
import { ErrorDialogComponent } from './error-dialog.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ErrorDialogService } from './error-dialog.service';
import { MaterialModule } from '../material/material.module';

const sharedComponents = [ErrorDialogComponent];

@NgModule({
  declarations: [...sharedComponents],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [...sharedComponents],
  providers: [ErrorDialogService],
  entryComponents: [...sharedComponents],
})
export class SharedModule {}
