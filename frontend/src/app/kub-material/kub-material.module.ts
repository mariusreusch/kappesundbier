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

const kubMaterialModules = [MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule, MatIconModule,
  MatSnackBarModule, MatChipsModule, MatSidenavModule, MatListModule, MatDialogModule];

@NgModule({
  imports: kubMaterialModules,
  exports: kubMaterialModules

})
export class KubMaterialModule {
}
