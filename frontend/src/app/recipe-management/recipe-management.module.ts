import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeManagementRoutingModule } from './recipe-management-routing.module';
import { RecipeListComponent } from './recipe-overview/recipe-list.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeOverviewSmartComponent } from './recipe-overview/recipe-overview-smart.component';
import { ViewRecipeSmartComponent } from './view-recipe/view-recipe-smart.component';
import { KubMaterialModule } from '../kub-material/kub-material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { KubCommonModule } from '../kub-common/kub-common.module';
import { TranslateModule } from '@ngx-translate/core';
import { RecipeService } from './recipe-service';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { EditRecipeSmartComponent } from './edit-recipe/edit-recipe-smart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RecipeManagementRoutingModule,
    KubMaterialModule,
    KubCommonModule,
    TranslateModule
  ],
  declarations: [RecipeOverviewSmartComponent, NewRecipeComponent, RecipeListComponent, ViewRecipeSmartComponent,
    ViewRecipeComponent, ViewRecipeComponent, EditRecipeComponent, EditRecipeSmartComponent],
  providers: [RecipeService]
})
export class RecipeManagementModule {
}
