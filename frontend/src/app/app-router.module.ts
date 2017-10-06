import { NgModule } from '@angular/core';
import { RecipeManagementComponent } from './recipe-management/recipe-management.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
  {
    path: 'recipe-overview',
    component: RecipeManagementComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'recipe-detail/:id',
    component: RecipeDetailComponent,
    canActivate: [AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRouterModule {
}
