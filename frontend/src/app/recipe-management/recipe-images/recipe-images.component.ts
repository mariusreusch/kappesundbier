import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RecipeImage} from '../recipe-image';

@Component({
  selector: 'kub-recipe-images',
  templateUrl: './recipe-images.component.html',
  styleUrls: ['./recipe-images.component.css']
})
export class RecipeImagesComponent {

  @Input()
  images: RecipeImage[];

  @Input()
  editMode = false;

  @Output()
  onImageDelete = new EventEmitter<RecipeImage>();

  onDeletedImage(image: RecipeImage) {
    this.onImageDelete.emit(image);
  }
}
