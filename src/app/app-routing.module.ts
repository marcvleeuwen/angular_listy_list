import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SplashComponent} from './modules/splash/splash.component';
import {HomeComponent} from './modules/home/home.component';
import {SignUpComponent} from './modules/sign-up/sign-up.component';
import {LoginComponent} from './modules/login/login.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SplashComponent
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      }, {
        path: 'sign-up',
        component: SignUpComponent
      }
    ]
  }, {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
