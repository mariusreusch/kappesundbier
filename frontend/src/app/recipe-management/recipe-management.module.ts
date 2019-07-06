import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RecipeManagementRoutingModule} from './recipe-management-routing.module';
import {CreateRecipeComponent} from './create-recipe/create-recipe.component';
import {ViewRecipeSmartComponent} from './view-recipe/view-recipe-smart.component';
import {KubMaterialModule} from '../common/material/kub-material.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {KubComponentsModule} from '../common/components/kub-components.module';
import {TranslateModule} from '@ngx-translate/core';
import {RecipeService} from './recipe-service';
import {ViewRecipeComponent} from './view-recipe/view-recipe.component';
import {EditRecipeComponent} from './edit-recipe/edit-recipe.component';
import {EditRecipeSmartComponent} from './edit-recipe/edit-recipe-smart.component';
import {CreateRecipeSmartComponent} from './create-recipe/create-recipe-smart.component';
import {RecipeImagesComponent} from './recipe-images/recipe-images.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RecipeManagementRoutingModule,
    KubMaterialModule,
    KubComponentsModule,
    TranslateModule
  ],
  declarations: [CreateRecipeComponent, ViewRecipeSmartComponent,
    ViewRecipeComponent, ViewRecipeComponent, EditRecipeComponent, EditRecipeSmartComponent, CreateRecipeSmartComponent,
    RecipeImagesComponent],
  providers: [RecipeService]
})
export class RecipeManagementModule {
}
