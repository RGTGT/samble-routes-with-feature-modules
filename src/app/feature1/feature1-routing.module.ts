import {RouterModule, Routes} from '@angular/router';
import {FeatureDashboardComponent} from './components/feature-dashboard/feature-dashboard.component';
import {ListComponent} from './components/list/list.component';
import {NgModule} from '@angular/core';

const featureRoutes: Routes = [

  {
    path: '',
    component: FeatureDashboardComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListComponent }
    ]
  }
];

@NgModule({

  imports: [
    RouterModule.forChild(featureRoutes)
  ],
  exports: [ RouterModule ]
})
export class Feature1RoutingModule {

}
