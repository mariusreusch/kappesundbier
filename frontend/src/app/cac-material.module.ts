import {
  MdButtonModule, MdCardModule, MdChipsModule, MdIconModule, MdInputModule, MdSnackBarModule, MdToolbarModule
} from "@angular/material";

import { MaterialModule } from "@angular/material";
import { NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth-guard.service";

const cacMaterialModules = [MaterialModule, MdButtonModule, MdCardModule, MdInputModule, MdToolbarModule, MdIconModule, MdSnackBarModule, MdChipsModule];

@NgModule({
  imports: cacMaterialModules,
  exports: cacMaterialModules

})
export class CacMaterialModule {
}
