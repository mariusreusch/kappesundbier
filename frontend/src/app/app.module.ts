import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AppRouterModule} from './app-router.module';
import {KubMaterialModule} from './common/material/kub-material.module';
import {YesNoDialogComponent} from './common/components/yes-no-dialog/yes-no-dialog.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {WeekPlannerModule} from './week-planner/week-planner.module';
import {AuthenticationModule} from './authentication/authentication.module';
import {RecipeManagementModule} from './recipe-management/recipe-management.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CookbookManagementModule} from './cookbook-management/cookbook-management.module';
import {RecipeOverviewModule} from './recipe-overview/recipe-overview.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    KubMaterialModule,
    AuthenticationModule,
    RecipeOverviewModule,
    RecipeManagementModule,
    WeekPlannerModule,
    CookbookManagementModule
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
