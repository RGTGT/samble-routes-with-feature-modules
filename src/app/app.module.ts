import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {Feature1Module} from './feature1/feature1.module';


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,

    Feature1Module, // Eagerly load
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
