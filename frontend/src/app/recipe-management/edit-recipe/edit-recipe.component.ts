import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../ingredient';
import { Recipe } from '../recipe';
import { NgForm } from '@angular/forms';
import { FileToUpload } from '../../kub-common/file-upload/file-to-upload';

@Component({
  selector: 'kub-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent {

  newIngredient = new Ingredient('', null, '');
  categoriesAsCommaSeparatedString = '';

  @Input()
  recipe: Recipe;
  @Input()
  base64EncodedImages: any[];
  @Output()
  onRecipeCreated = new EventEmitter<Recipe>();
  @ViewChild('ingredientForm')
  ingredientForm: NgForm;
  @ViewChild('recipeForm')
  recipeForm: NgForm;

  constructor() {
  }

  addIngredient(): void {
    this.recipe.ingredients.push(this.newIngredient);
    this.resetIngredientForm();
  }

  removeIngredient(ingredientToRemove: Ingredient): void {
    const index = this.recipe.ingredients.indexOf(ingredientToRemove);
    if (index > -1) {
      this.recipe.ingredients.splice(index, 1);
    }
  }

  onSubmit() {
    if (this.recipe.ingredients.length > 0) {
      this.recipe.categories = this.categoriesAsCommaSeparatedString.split(',').map(s => s.trim());
      this.onRecipeCreated.emit(this.recipe);
      this.resetIngredientForm();
      this.resetRecipeForm();
    }
  }

  addImage(file: FileToUpload) {
    this.recipe.images.push(file);
  }

  private resetIngredientForm() {
    this.newIngredient = new Ingredient('', null, '');
    this.ingredientForm.resetForm();
  }

  private resetRecipeForm() {
    this.recipe = new Recipe('', '', null, '', [], [], [], null);
    this.categoriesAsCommaSeparatedString = '';
    this.recipeForm.resetForm();
  }
}
