import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RecipeOverviewComponent } from "./recipe-overview/recipe-overview.component";
import { WeekPlannerComponent } from "./week-planner/week-planner.component";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'recipe-overview',
    component: RecipeOverviewComponent
  },
  {
    path: 'week-planner',
    component: WeekPlannerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class CacRouterModule {
}
