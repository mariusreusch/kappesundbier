import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewRecipeSmartComponent } from './view-recipe/view-recipe-smart.component';
import { AuthGuard } from '../authentication/auth-guard.service';
import { RecipeOverviewSmartComponent } from './recipe-overview/recipe-overview-smart.component';
import { EditRecipeSmartComponent } from './edit-recipe/edit-recipe-smart.component';
import { CreateRecipeSmartComponent } from './create-recipe/create-recipe-smart.component';
import { HomeComponent } from '../home/home.component';

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
    path: 'view-recipe/:id',
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
    component: CreateRecipeSmartComponent,
    canActivate: [AuthGuard]

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeManagementRoutingModule {
}
