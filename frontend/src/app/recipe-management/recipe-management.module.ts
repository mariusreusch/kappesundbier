import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeManagementRoutingModule } from './recipe-management-routing.module';
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeManagementComponent } from './recipe-management.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { KubMaterialModule } from '../kub-material/kub-material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { KubCommonModule } from '../kub-common/kub-common.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RecipeManagementRoutingModule,
    KubMaterialModule,
    KubCommonModule
  ],
  declarations: [RecipeManagementComponent, NewRecipeComponent, RecipeOverviewComponent, RecipeDetailComponent]
})
export class RecipeManagementModule {
}
