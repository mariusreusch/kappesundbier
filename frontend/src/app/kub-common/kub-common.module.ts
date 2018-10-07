import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoDialogComponent } from './yes-no-dialog/yes-no-dialog.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { KubMaterialModule } from '../kub-material/kub-material.module';
import { ChipListComponent } from './chip-list/chip-list.component';

@NgModule({
  imports: [
    CommonModule,
    KubMaterialModule
  ],
  declarations: [YesNoDialogComponent, ImageUploadComponent, ChipListComponent],
  exports: [YesNoDialogComponent, ImageUploadComponent, ChipListComponent]
})
export class KubCommonModule { }
