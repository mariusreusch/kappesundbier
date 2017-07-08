import { Component, EventEmitter, Output } from "@angular/core";
import { FileToUpload } from "./file-to-upload";

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  @Output()
  onFileSelected = new EventEmitter<FileToUpload>();


  onChange(files: File[]) {
    if (files && files[0]) {
      let fileReader = new FileReader();

      fileReader.onload = () => {
        let fileToUpload = new FileToUpload();
        fileToUpload.file = files[0];
        fileToUpload.content = fileReader.result;
        this.onFileSelected.emit(fileToUpload);
      };

      fileReader.readAsDataURL(files[0]);
    }
  }

}
