import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayListComponent } from './display-list.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';



@NgModule({
    declarations: [DisplayListComponent],
    exports: [
        DisplayListComponent
    ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatRippleModule
  ]
})
export class DisplayListModule { }
