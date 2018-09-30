import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoDialogComponent } from './yes-no-dialog/yes-no-dialog.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { KubMaterialModule } from '../kub-material/kub-material.module';
import { ChipListComponent } from './chip-list/chip-list.component';

@NgModule({
  imports: [
    CommonModule,
    KubMaterialModule
  ],
  declarations: [YesNoDialogComponent, FileUploadComponent, ChipListComponent],
  exports: [YesNoDialogComponent, FileUploadComponent, ChipListComponent]
})
export class KubCommonModule { }
