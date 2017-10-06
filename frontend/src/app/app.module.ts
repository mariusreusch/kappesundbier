import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRouterModule } from './app-router.module';
import 'hammerjs';
import { KubMaterialModule } from './kub-material.module';
import { HomeComponent } from './home/home.component';
import { RecipeManagementComponent } from './recipe-management/recipe-management.component';
import { NewRecipeComponent } from './recipe-management/new-recipe/new-recipe.component';
import { RecipeOverviewComponent } from './recipe-management/recipe-overview/recipe-overview.component';
import { LoginComponent } from './login/login.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { YesNoDialogComponent } from './yes-no-dialog/yes-no-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { WeekPlannerModule } from './week-planner/week-planner.module';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule,
    KubMaterialModule,
    BrowserAnimationsModule,
    HomeModule,
    WeekPlannerModule
  ],
  entryComponents: [
    YesNoDialogComponent
  ],
  declarations: [
    AppComponent, RecipeManagementComponent, NewRecipeComponent, RecipeOverviewComponent,
    LoginComponent, RecipeDetailComponent, FileUploadComponent, YesNoDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
