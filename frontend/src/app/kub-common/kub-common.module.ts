import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoDialogComponent } from './yes-no-dialog/yes-no-dialog.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { KubMaterialModule } from '../kub-material/kub-material.module';

@NgModule({
  imports: [
    CommonModule,
    KubMaterialModule
  ],
  declarations: [YesNoDialogComponent, FileUploadComponent],
  exports: [YesNoDialogComponent, FileUploadComponent]
})
export class KubCommonModule { }
