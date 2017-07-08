import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RecipeManagementComponent } from "./recipe-management/recipe-management.component";
import { WeekPlannerComponent } from "./week-planner/week-planner.component";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth-guard.service";
import { AuthService } from "./auth.service";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recipe-overview',
    component: RecipeManagementComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'week-planner',
    component: WeekPlannerComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AppRouterModule {
}
