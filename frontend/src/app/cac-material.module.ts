import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdSnackBarContainer, MdSnackBarModule,
  MdToolbarModule
} from "@angular/material";
import { NgModule } from "@angular/core";

const cacMaterialModules = [MdButtonModule, MdCardModule, MdInputModule, MdToolbarModule, MdIconModule, MdSnackBarModule];

@NgModule({
  imports: cacMaterialModules,
  exports: cacMaterialModules,
})
export class CacMaterialModule {
}
