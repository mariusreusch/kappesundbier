import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'kub-recipe-category-overview',
  templateUrl: './recipe-category-overview.component.html',
  styleUrls: ['./recipe-category-overview.component.css']
})
export class RecipeCategoryOverviewComponent {

  @Input() recipes: Recipe[];
  @Input() category: string;

  @Output() onRecipeSelect = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.onRecipeSelect.emit(recipe);
  }
}
