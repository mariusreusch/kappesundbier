import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe';

@Component({
  selector: 'kub-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[];

  @Input('recipes')
  set setMyRecipes(myRecipes: Recipe[]) {
    if (myRecipes) {
      this.recipes = this.orderByCreationDateDescending(myRecipes);
    }
  }

  @Output()
  onRecipeSelect = new EventEmitter<Recipe>();

  @Output()
  onRecipeDelete = new EventEmitter<Recipe>();

  onSelect(recipe: Recipe) {
    this.onRecipeSelect.emit(recipe);
  }

  onDelete(recipe: Recipe) {
    this.onRecipeDelete.emit(recipe);
  }

  private orderByCreationDateDescending(myRecipes: Recipe[]) {
    return myRecipes.sort((a, b) => {
      return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
    });
  }
}
