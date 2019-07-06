import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewRecipeSmartComponent} from './view-recipe/view-recipe-smart.component';
import {AuthGuard} from '../authentication/auth-guard.service';
import {EditRecipeSmartComponent} from './edit-recipe/edit-recipe-smart.component';
import {CreateRecipeSmartComponent} from './create-recipe/create-recipe-smart.component';

const routes: Routes = [
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
