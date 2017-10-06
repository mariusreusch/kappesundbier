import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../ingredient';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { CreateRecipeResult } from '../create-recipe-result';
import { CreateRecipeResultState } from '../create-recipe-result-state';
import { Recipe } from '../recipe';
import { FileToUpload } from '../../kub-common/file-upload/file-to-upload';


@Component({
  selector: 'kub-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
  providers: [MatSnackBar]
})
export class NewRecipeComponent {


  newRecipe = new Recipe('', '', null, '', [], [], []);
  newIngredient = new Ingredient('', null, '');
  categoriesAsCommaSeparatedString = '';

  @Output()
  onRecipeCreated = new EventEmitter<Recipe>();

  @ViewChild('ingredientForm') ingredientForm: NgForm;
  @ViewChild('recipeForm') recipeForm: NgForm;

  @Input()
  set createRecipeResult(createRecipeResult: CreateRecipeResult) {
    if (createRecipeResult) {
      switch (createRecipeResult.state) {
        case CreateRecipeResultState.SUCCESS:
          // TODO: find a proper solution (instead of set timeout) Problem: https://github.com/angular/angular/issues/10762
          setTimeout(() => {
            this.snackBar.open('Ein neues fabelhaftes Rezept wurde erfolgreich gespeichert.', null, {
              duration: 4000,
            });
          }, 1);

          break;
        case CreateRecipeResultState.FAILED:
          // TODO: find a proper solution (instead of set timeout). Problem: https://github.com/angular/angular/issues/10762
          setTimeout(() => {
            this.snackBar.open('Lass mich ich kann das! Oh kaputt : (', null, {
              duration: 4000,
            });
          }, 1);
          break;
      }
    }
  }

  constructor(private snackBar: MatSnackBar) {
  }

  addIngredient(): void {
    this.newRecipe.ingredients.push(this.newIngredient);
    this.resetIngredientForm();
  }

  removeIngredient(ingredientToRemove: Ingredient): void {
    const index = this.newRecipe.ingredients.indexOf(ingredientToRemove);
    if (index > -1) {
      this.newRecipe.ingredients.splice(index, 1);
    }
  }

  onSubmit() {
    if (this.newRecipe.ingredients.length > 0) {
      this.newRecipe.categories = this.categoriesAsCommaSeparatedString.split(',').map(s => s.trim());
      this.onRecipeCreated.emit(this.newRecipe);
      this.resetIngredientForm();
      this.resetRecipeForm();
    }
  }

  addImage(file: FileToUpload) {
    this.newRecipe.images.push(file);
  }

  private resetIngredientForm() {
    this.newIngredient = new Ingredient('', null, '');
    this.ingredientForm.resetForm();
  }

  private resetRecipeForm() {
    this.newRecipe = new Recipe('', '', null, '', [], [], []);
    this.categoriesAsCommaSeparatedString = '';
    this.recipeForm.resetForm();
  }
}
