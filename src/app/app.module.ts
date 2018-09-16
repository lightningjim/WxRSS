import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Ng2WeatherIconsModule } from 'ng2-weather-icons';
import { NavigationComponent } from './navigation/navigation.component';
import { SubnavComponent } from './subnav/subnav.component';
import { SPCItemComponent } from './spcitem/spcitem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SubnavComponent,
    SPCItemComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    Ng2WeatherIconsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
