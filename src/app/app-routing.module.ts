import {RouterModule, Routes} from '@angular/router';
import {WrapperComponent} from './components/wrapper/wrapper.component';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'feature', loadChildren: 'app/feature1/feature1.module#Feature1Module'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
