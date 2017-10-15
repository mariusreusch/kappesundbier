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
import { KubCommonModule } from '../kub-common/kub-common.module';
import { TranslateModule } from '@ngx-translate/core';
import { RecipeService } from './recipe-service';
import { RecipeDetailViewComponent } from './recipe-detail/recipe-detail-view/recipe-detail-view.component';
import { RecipeDetailEditComponent } from './recipe-detail/recipe-detail-edit/recipe-detail-edit.component';

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
  declarations: [RecipeManagementComponent, NewRecipeComponent, RecipeOverviewComponent, RecipeDetailComponent,
    RecipeDetailViewComponent, RecipeDetailViewComponent, RecipeDetailEditComponent],
  providers: [RecipeService]
})
export class RecipeManagementModule {
}