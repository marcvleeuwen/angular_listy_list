import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputDialogComponent} from './input-dialog/input-dialog.component';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [InputDialogComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class DialogModule {
}
