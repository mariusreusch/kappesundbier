import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRouterModule } from './app-router.module';
import 'hammerjs';
import { KubMaterialModule } from './kub-material.module';
import { RecipeManagementComponent } from './recipe-management/recipe-management.component';
import { NewRecipeComponent } from './recipe-management/new-recipe/new-recipe.component';
import { RecipeOverviewComponent } from './recipe-management/recipe-overview/recipe-overview.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { YesNoDialogComponent } from './yes-no-dialog/yes-no-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { WeekPlannerModule } from './week-planner/week-planner.module';
import { HomeModule } from './home/home.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule,
    KubMaterialModule,
    BrowserAnimationsModule,
    HomeModule,
    WeekPlannerModule,
    LoginModule
  ],
  entryComponents: [
    YesNoDialogComponent
  ],
  declarations: [
    AppComponent, RecipeManagementComponent, NewRecipeComponent, RecipeOverviewComponent,
    RecipeDetailComponent, FileUploadComponent, YesNoDialogComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AppModule {
}
