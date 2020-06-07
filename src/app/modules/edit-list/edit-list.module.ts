import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditListComponent } from './edit-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';



@NgModule({
    declarations: [EditListComponent],
    exports: [
        EditListComponent
    ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatListModule,
    MatInputModule
  ]
})
export class EditListModule { }
