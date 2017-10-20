import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../ingredient';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { CreateRecipeResult } from '../create-recipe-result';
import { CreateRecipeResultState } from '../create-recipe-result-state';
import { Recipe } from '../recipe';
import { FileToUpload } from '../../kub-common/file-upload/file-to-upload';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'kub-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent {

  newRecipe = new Recipe('', '', null, '', [], [], [], null);
  newIngredient = new Ingredient('', null, '');
  categoriesAsCommaSeparatedString = '';

  @Output()
  onRecipeCreate = new EventEmitter<Recipe>();

  @Output()
  onRecipeSuccessFullyCreated = new EventEmitter<void>();

  @Input('createRecipeResult')
  set setCreateRecipeResult(createRecipeResult: CreateRecipeResult) {
    this.handleCreateRecipeResult(createRecipeResult)
  }


  @ViewChild('ingredientForm') ingredientForm: NgForm;
  @ViewChild('recipeForm') recipeForm: NgForm;

  constructor(private snackBar: MatSnackBar,
              private translate: TranslateService) {
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
      this.onRecipeCreate.emit(this.newRecipe);
    }
  }

  handleCreateRecipeResult(createRecipeResult: CreateRecipeResult) {
    if (createRecipeResult) {
      switch (createRecipeResult.state) {
        case CreateRecipeResultState.SUCCESS:
          this.resetIngredientForm();
          this.resetRecipeForm();
          this.onRecipeSuccessFullyCreated.emit();
          // TODO: find a proper solution (instead of set timeout) Problem: https://github.com/angular/angular/issues/10762
          setTimeout(() => {
            this.translate.get('Recipe.SuccessfullySaved').subscribe(text => {
              this.snackBar.open(text, null, {
                duration: 4000,
              });
            });
          }, 1);

          break;
        case CreateRecipeResultState.FAILED:
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

  addImage(file: FileToUpload) {
    this.newRecipe.images.push(file);
  }

  private resetIngredientForm() {
    this.newIngredient = new Ingredient('', null, '');
    this.ingredientForm.resetForm();
  }

  private resetRecipeForm() {
    this.newRecipe = new Recipe('', '', null, '', [], [], [], null);
    this.categoriesAsCommaSeparatedString = '';
    this.recipeForm.resetForm();
  }
}
