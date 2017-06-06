import {
  MdButtonModule, MdCardModule, MdChipsModule, MdIconModule, MdInputModule, MdSnackBarModule, MdToolbarModule
} from "@angular/material";
import { NgModule } from "@angular/core";

const cacMaterialModules = [MdButtonModule, MdCardModule, MdInputModule, MdToolbarModule, MdIconModule, MdSnackBarModule, MdChipsModule];

@NgModule({
  imports: cacMaterialModules,
  exports: cacMaterialModules,
})
export class CacMaterialModule {
}
