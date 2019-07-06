import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {KubMaterialModule} from '../common/material/kub-material.module';
import {KubComponentsModule} from '../common/components/kub-components.module';
import {TranslateModule} from '@ngx-translate/core';
import {RecipeOverviewRoutingModule} from './recipe-overview-routing.module';
import {RecipeOverviewSmartComponent} from './recipe-overview-smart.component';
import {RecipeOverviewComponent} from './recipe-overview.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {ViewCategoryComponent} from './view-category/view-category.component';
import {ViewCategorySmartComponent} from './view-category/view-category-smart.component';

@NgModule({
  declarations: [RecipeOverviewSmartComponent, RecipeOverviewComponent, RecipeListComponent, CategoryListComponent,
    ViewCategoryComponent, ViewCategorySmartComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RecipeOverviewRoutingModule,
    KubMaterialModule,
    KubComponentsModule,
    TranslateModule
  ]
})
export class RecipeOverviewModule { }
