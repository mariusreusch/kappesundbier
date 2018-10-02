import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeManagementRoutingModule } from './recipe-management-routing.module';
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
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
import { CreateRecipeSmartComponent } from './create-recipe/create-recipe-smart.component';
import { RecipeListComponent } from './recipe-overview/recipe-list/recipe-list.component';
import { CategoryListComponent } from './recipe-overview/category-list/category-list.component';
import { RecipeCategoryOverviewComponent } from './recipe-category-overview/recipe-category-overview.component';
import { RecipeCategoryOverviewSmartComponent } from './recipe-category-overview/recipe-category-overview-smart.component';

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
  declarations: [RecipeOverviewSmartComponent, CreateRecipeComponent, RecipeOverviewComponent, ViewRecipeSmartComponent,
    ViewRecipeComponent, ViewRecipeComponent, EditRecipeComponent, EditRecipeSmartComponent, CreateRecipeSmartComponent,
    RecipeListComponent, CategoryListComponent, RecipeCategoryOverviewComponent, RecipeCategoryOverviewSmartComponent],
  providers: [RecipeService]
})
export class RecipeManagementModule {
}
