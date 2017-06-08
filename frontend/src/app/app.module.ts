import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { CacRouterModule } from "./cac-router.module";
import "hammerjs";
import { CacMaterialModule } from "./cac-material.module";
import { HomeComponent } from "./home/home.component";
import { RecipeManagementComponent } from "./recipe-management/recipe-management.component";
import { NewRecipeComponent } from "./recipe-management/new-recipe/new-recipe.component";
import { WeekPlannerComponent } from "./week-planner/week-planner.component";
import { RecipeOverviewComponent } from "./recipe-management/recipe-overview/recipe-overview.component";
import { LoginComponent } from "./login.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CacRouterModule,
    CacMaterialModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent, HomeComponent, RecipeManagementComponent, NewRecipeComponent, RecipeOverviewComponent,
    WeekPlannerComponent, LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
