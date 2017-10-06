import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRouterModule } from './app-router.module';
import 'hammerjs';
import { KubMaterialModule } from './kub-material.module';
import { YesNoDialogComponent } from './recipe-management/yes-no-dialog/yes-no-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { WeekPlannerModule } from './week-planner/week-planner.module';
import { HomeModule } from './home/home.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { LoginModule } from './login/login.module';
import { RecipeManagementModule } from './recipe-management/recipe-management.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule,
    KubMaterialModule,
    BrowserAnimationsModule,
    HomeModule,
    LoginModule,
    RecipeManagementModule,
    WeekPlannerModule
  ],
  entryComponents: [
    YesNoDialogComponent
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AppModule {
}
