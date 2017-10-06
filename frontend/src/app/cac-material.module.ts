import {
  MdButtonModule,
  MdCardModule,
  MdChipsModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdSidenavModule,
  MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';

import { NgModule } from '@angular/core';

const cacMaterialModules = [MdButtonModule, MdCardModule, MdInputModule, MdToolbarModule, MdIconModule,
  MdSnackBarModule, MdChipsModule, MdSidenavModule, MdListModule, MdDialogModule];

@NgModule({
  imports: cacMaterialModules,
  exports: cacMaterialModules

})
export class CacMaterialModule {
}
