import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe-management/recipe';

@Component({
  selector: 'kub-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  _recipes: Recipe[];

  @Input()
  set recipes(recipes: Recipe[]) {
    if (recipes) {
      this._recipes = this.orderByCreationDateDescending(recipes);
    }
  }

  @Output()
  onRecipeSelect = new EventEmitter<Recipe>();

  onSelect(recipe: Recipe) {
    this.onRecipeSelect.emit(recipe);
  }

  private orderByCreationDateDescending(myRecipes: Recipe[]) {
    return myRecipes.sort((a, b) => {
      return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
    });
  }
}
