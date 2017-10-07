import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe';

@Component({
  selector: 'kub-recipe-detail-view',
  templateUrl: './recipe-detail-view.component.html',
  styleUrls: ['./recipe-detail-view.component.css']
})
export class RecipeDetailViewComponent {

  @Input()
  recipe: Recipe;

  @Input()
  base64EncodedImages: any[];

  @Output()
  switchToEditModeEvent = new EventEmitter<void>();


  constructor() { }

  switchToEditMode() {
    this.switchToEditModeEvent.emit();
  }
}
