import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {LoginModule} from '../login/login.module';
import {SignUpModule} from '../sign-up/sign-up.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AuthComponent],
  imports: [
    CommonModule,
    LoginModule,
    SignUpModule,
    RouterModule
  ]
})
export class AuthModule {
}
