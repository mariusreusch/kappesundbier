import {
  MdButtonModule,
  MdCardModule,
  MdChipsModule,
  MdIconModule,
  MdInputModule, MdListModule, MdSidenavModule,
  MdSnackBarModule,
  MdToolbarModule
} from "@angular/material";

import { NgModule } from "@angular/core";

const cacMaterialModules = [MdButtonModule, MdCardModule, MdInputModule, MdToolbarModule, MdIconModule,
  MdSnackBarModule, MdChipsModule, MdSidenavModule, MdListModule];

@NgModule({
  imports: cacMaterialModules,
  exports: cacMaterialModules

})
export class CacMaterialModule {
}
