import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

const kubMaterialModules = [MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule, MatIconModule,
  MatSnackBarModule, MatChipsModule, MatSidenavModule, MatListModule, MatDialogModule];

@NgModule({
  imports: kubMaterialModules,
  exports: kubMaterialModules,
  providers: [MatSnackBar]
})
export class KubMaterialModule {
}
