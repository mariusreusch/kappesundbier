import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'kub-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent {

  @Input()
  recipe: Recipe;

  @Input()
  base64EncodedImages: any[];

  @Output()
  switchToEditModeEvent = new EventEmitter<Recipe>();

  constructor() { }

  switchToEditMode() {
    this.switchToEditModeEvent.emit(this.recipe);
  }
}
