import {BrowserModule, HammerModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeModule} from './modules/home/home.module';
import {AuthModule} from './modules/auth/auth.module';
import {SplashModule} from './modules/splash/splash.module';
import {ThemeService} from './common/services/theme/theme.service';
import {StyleManagerService} from './common/services/style-manager/style-manager.service';
import {HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HammerModule,
    SplashModule,
    HomeModule,
    AuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  bootstrap: [AppComponent],
  providers: [StyleManagerService, ThemeService]
})
export class AppModule {
}
