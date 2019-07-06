import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe-management/recipe';

@Component({
  selector: 'kub-recipe-category-overview',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent {

  @Input() recipes: Recipe[];
  @Input() category: string;

  @Output() onRecipeSelect = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.onRecipeSelect.emit(recipe);
  }
}
