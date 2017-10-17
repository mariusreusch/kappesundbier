import { Component, ViewChild } from '@angular/core';
import { Ingredient } from '../ingredient';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { CreateRecipeResult } from '../create-recipe-result';
import { CreateRecipeResultState } from '../create-recipe-result-state';
import { Recipe } from '../recipe';
import { FileToUpload } from '../../kub-common/file-upload/file-to-upload';
import { TranslateService } from '@ngx-translate/core';
import { RecipeService } from '../recipe-service';
import { Router } from '@angular/router';


@Component({
  selector: 'kub-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {

  newRecipe = new Recipe('', '', null, '', [], [], [], null);
  newIngredient = new Ingredient('', null, '');
  categoriesAsCommaSeparatedString = '';

  @ViewChild('ingredientForm') ingredientForm: NgForm;
  @ViewChild('recipeForm') recipeForm: NgForm;

  constructor(private snackBar: MatSnackBar,
              private translate: TranslateService,
              private router: Router,
              private recipeService: RecipeService) {
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
      this.recipeService.create(this.newRecipe)
        .subscribe(createRecipeResult => this.handleCreateRecipeResult(createRecipeResult));
    }
  }

  handleCreateRecipeResult(createRecipeResult: CreateRecipeResult) {
    if (createRecipeResult) {
      switch (createRecipeResult.state) {
        case CreateRecipeResultState.SUCCESS:
          this.resetIngredientForm();
          this.resetRecipeForm();
          this.router.navigate(['/recipe-overview']);
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
