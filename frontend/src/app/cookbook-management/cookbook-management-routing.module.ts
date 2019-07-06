import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../authentication/auth-guard.service';
import {CookbookOverviewComponent} from './cookbook-overview/cookbook-overview.component';

const routes: Routes = [{
  path: 'cookbook-overview',
  component: CookbookOverviewComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookbookManagementRoutingModule {
}
