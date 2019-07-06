import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeOverviewSmartComponent} from './recipe-overview-smart.component';
import {AuthGuard} from '../authentication/auth-guard.service';
import {ViewCategorySmartComponent} from './view-category/view-category-smart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipe-overview',
    pathMatch: 'full'
  },
  {
    path: 'recipe-overview',
    component: RecipeOverviewSmartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recipe-category/:category-name',
    component: ViewCategorySmartComponent,
    canActivate: [AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeOverviewRoutingModule {
}
