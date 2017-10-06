import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

import { NgModule } from '@angular/core';

const cacMaterialModules = [MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule, MatIconModule,
  MatSnackBarModule, MatChipsModule, MatSidenavModule, MatListModule, MatDialogModule];

@NgModule({
  imports: cacMaterialModules,
  exports: cacMaterialModules

})
export class CacMaterialModule {
}
