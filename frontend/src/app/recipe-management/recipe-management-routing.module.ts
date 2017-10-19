import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewRecipeSmartComponent } from './view-recipe/view-recipe-smart.component';
import { AuthGuard } from '../authentication/auth-guard.service';
import { RecipeOverviewSmartComponent } from './recipe-overview/recipe-overview-smart.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { EditRecipeSmartComponent } from './edit-recipe/edit-recipe-smart.component';

const routes: Routes = [
  {
    path: 'recipe-overview',
    component: RecipeOverviewSmartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recipe-detail/:id',
    component: ViewRecipeSmartComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'edit-recipe/:id',
    component: EditRecipeSmartComponent,
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
