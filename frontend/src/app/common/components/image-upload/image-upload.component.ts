import {Component, EventEmitter, Output} from '@angular/core';
import {UploadedImage} from './uploaded-image';

@Component({
  selector: 'kub-file-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {

  @Output()
  onFileSelect = new EventEmitter<UploadedImage>();

  onChange(files: FileList | null) {
    if (files && files[0]) {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        const fileToUpload = new UploadedImage();
        fileToUpload.file = files[0];
        fileToUpload.content = fileReader.result;
        this.onFileSelect.emit(fileToUpload);
      };
      fileReader.readAsDataURL(files[0]);
    }
  }
}
