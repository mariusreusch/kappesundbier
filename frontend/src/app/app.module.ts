import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRouterModule } from './app-router.module';
import 'hammerjs';
import { KubMaterialModule } from './kub-material/kub-material.module';
import { YesNoDialogComponent } from './kub-common/yes-no-dialog/yes-no-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { WeekPlannerModule } from './week-planner/week-planner.module';
import { HomeModule } from './home/home.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { RecipeManagementModule } from './recipe-management/recipe-management.module';
import { KubCommonModule } from './kub-common/kub-common.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule,
    KubMaterialModule,
    BrowserAnimationsModule,
    HomeModule,
    AuthenticationModule,
    RecipeManagementModule,
    WeekPlannerModule,
    KubCommonModule
  ],
  entryComponents: [
    YesNoDialogComponent
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
