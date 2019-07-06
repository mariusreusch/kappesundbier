import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookbookOverviewComponent } from './cookbook-overview/cookbook-overview.component';
import {CookbookManagementRoutingModule} from './cookbook-management-routing.module';

@NgModule({
  declarations: [CookbookOverviewComponent],
  imports: [
    CommonModule,
    CookbookManagementRoutingModule
  ]
})
export class CookbookManagementModule { }
