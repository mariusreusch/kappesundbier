import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuard } from '../authentication/auth-guard.service';
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';

const routes: Routes = [
  {
    path: 'recipe-overview',
    component: RecipeOverviewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recipe-detail/:id',
    component: RecipeDetailComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'create-recipe',
    component: NewRecipeComponent,
    canActivate: [AuthGuard]

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeManagementRoutingModule {
}
