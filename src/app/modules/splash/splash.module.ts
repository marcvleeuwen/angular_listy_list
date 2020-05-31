import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SplashComponent} from './splash.component';
import {AppRoutingModule} from '../../app-routing.module';


@NgModule({
  declarations: [SplashComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SplashModule {
}
