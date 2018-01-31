import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureDashboardComponent } from './components/feature-dashboard/feature-dashboard.component';
import { ListComponent } from './components/list/list.component';
import {RouterModule} from '@angular/router';
import {Feature1RoutingModule} from './feature1-routing.module';

@NgModule({
  imports: [
    CommonModule,

    Feature1RoutingModule,
  ],
  declarations: [FeatureDashboardComponent, ListComponent]
})
export class Feature1Module { }
