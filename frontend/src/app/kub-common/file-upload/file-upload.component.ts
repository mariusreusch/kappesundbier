import { Component, EventEmitter, Output } from '@angular/core';
import { FileToUpload } from './file-to-upload';

@Component({
  selector: 'kub-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  @Output()
  onFileSelect = new EventEmitter<FileToUpload>();

  onChange(files: File[]) {
    if (files && files[0]) {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        const fileToUpload = new FileToUpload();
        fileToUpload.file = files[0];
        fileToUpload.content = fileReader.result;
        this.onFileSelect.emit(fileToUpload);
      };
      fileReader.readAsDataURL(files[0]);
    }
  }
}
