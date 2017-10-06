import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeekPlannerRoutingModule } from './week-planner-routing.module';
import { WeekPlannerComponent } from './week-planner.component';

@NgModule({
  imports: [
    CommonModule,
    WeekPlannerRoutingModule
  ],
  declarations: [WeekPlannerComponent]
})
export class WeekPlannerModule {
}
