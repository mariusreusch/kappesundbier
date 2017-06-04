import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdToolbarModule } from "@angular/material";
import { NgModule } from "@angular/core";

const cacMaterialModules = [MdButtonModule, MdCardModule, MdInputModule, MdToolbarModule, MdIconModule];

@NgModule({
  imports: cacMaterialModules,
  exports: cacMaterialModules,
})
export class CacMaterialModule {
}
