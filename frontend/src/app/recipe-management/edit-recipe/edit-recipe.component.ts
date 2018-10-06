import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../ingredient';
import { Recipe } from '../recipe';
import { NgForm } from '@angular/forms';
import { EditRecipeResult } from '../edit-recipe-result';
import { ResponseResultState } from '../response-result-state';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material';
import { FileToUpload } from '../../kub-common/file-upload/file-to-upload';

@Component({
  selector: 'kub-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent {

  newIngredient = new Ingredient('', null, '');
  categoriesAsCommaSeparatedString = '';

  @Input() recipe: Recipe;
  @Input() base64EncodedImages: any[];

  @Output() onRecipeEdit = new EventEmitter<Recipe>();
  @Output() onRecipeSuccessfullyEdited = new EventEmitter<void>();

  @ViewChild('ingredientForm') ingredientForm: NgForm;
  @ViewChild('recipeForm') recipeForm: NgForm;

  @Input('recipe')
  set setRecipe(recipe: Recipe) {
    if (recipe != null) {
      this.recipe = recipe;
      this.categoriesAsCommaSeparatedString = this.recipe.categories.join(', ');
    }
  }

  @Input('editRecipeResult')
  set setCreateRecipeResult(editRecipeResult: EditRecipeResult) {
    this.handleEditRecipeResult(editRecipeResult)
  }

  constructor(private snackBar: MatSnackBar,
              private translate: TranslateService) {
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
      this.recipe.categories = this.categoriesAsCommaSeparatedString.split(',').map(s => s.trim());

    this.recipe.images = [];

      for (const image of this.base64EncodedImages) {
        const fileToUpload = new FileToUpload();
        fileToUpload.content = image;
        this.recipe.images.push(fileToUpload);
      }

      this.onRecipeEdit.emit(this.recipe);
  }

  addImage(file: FileToUpload) {
    if (!this.recipe.images || this.recipe.images.length === 0) {
      this.recipe.images = [];
    }
    this.recipe.images.push(file);
  }

  private handleEditRecipeResult(editRecipeResult: EditRecipeResult) {
    if (editRecipeResult) {
      switch (editRecipeResult.state) {
        case ResponseResultState.SUCCESS:
          this.resetIngredientForm();
          this.resetRecipeForm();
          this.onRecipeSuccessfullyEdited.emit();
          // TODO: find a proper solution (instead of set timeout) Problem: https://github.com/angular/angular/issues/10762
          setTimeout(() => {
            this.translate.get('Recipe.SuccessfullyUpdated').subscribe(text => {
              this.snackBar.open(text, null, {
                duration: 4000,
              });
            });
          }, 1);

          break;
        case ResponseResultState.FAILED:
          // TODO: find a proper solution (instead of set timeout). Problem: https://github.com/angular/angular/issues/10762
          setTimeout(() => {
            this.translate.get('Common.Error').subscribe(text => {
              this.snackBar.open(text, null, {
                duration: 4000,
              });
            });
          }, 1);
          break;
      }
    }
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
