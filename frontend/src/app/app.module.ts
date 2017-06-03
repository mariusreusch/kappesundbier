import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "@angular/material";
import { HomeComponent } from "./home/home.component";
import "hammerjs";
import { RecipeOverviewComponent } from "./recipe-overview/recipe-overview.component";
import { WeekPlannerComponent } from "./week-planner/week-planner.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'week-planner',
    component: WeekPlannerComponent
  },
  {
    path: 'recipe-overview',
    component: RecipeOverviewComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  declarations: [
    AppComponent, HomeComponent, RecipeOverviewComponent, WeekPlannerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
