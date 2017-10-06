import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeekPlannerComponent } from './week-planner.component';
import { AuthGuard } from '../authentication/auth-guard.service';

const routes: Routes = [{
  path: 'week-planner',
  component: WeekPlannerComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeekPlannerRoutingModule {
}
