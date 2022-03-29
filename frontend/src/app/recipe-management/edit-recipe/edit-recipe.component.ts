import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../ingredient';
import { Recipe } from '../recipe';
import { NgForm } from '@angular/forms';
import { EditRecipeResult } from '../edit-recipe-result';
import { ResponseResultState } from '../response-result-state';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UploadedImage } from '../../common/components/image-upload/uploaded-image';
import { RecipeImage } from '../recipe-image';
import { InstructionStep } from '../instruction-step';

@Component({
  selector: 'kub-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent {

  newIngredient = new Ingredient('', null, '');
  newInstructionStep: InstructionStep;
  categoriesAsCommaSeparatedString = '';

  @Input() recipe: Recipe;

  @Output() onRecipeEdit = new EventEmitter<Recipe>();
  @Output() onRecipeSuccessfullyEdited = new EventEmitter<void>();

  @ViewChild('ingredientForm', {static: false}) ingredientForm: NgForm;
  @ViewChild('instructionStepForm', {static: false}) instructionStepForm: NgForm;
  @ViewChild('recipeForm', {static: false}) recipeForm: NgForm;

  @Input('recipe')
  set setRecipe(recipe: Recipe) {
    if (recipe != null) {
      this.recipe = recipe;
      this.categoriesAsCommaSeparatedString = this.recipe.categories.join(', ');
      let highestExistingSequenceNumber = Math.max(0, ...this.recipe.instructionSteps.map(step => step.sequenceNumber));
      this.newInstructionStep = new InstructionStep(++highestExistingSequenceNumber, "")
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
    this.initializeIngredientForm();
  }

  removeIngredient(ingredientToRemove: Ingredient): void {
    const index = this.recipe.ingredients.indexOf(ingredientToRemove);
    if (index > -1) {
      this.recipe.ingredients.splice(index, 1);
    }
  }

  addInstructionStep() {
    this.recipe.instructionSteps.push(this.newInstructionStep);
    this.initializeInstructionStepForm();
  }

  removeInstructionStep(instructionStepToRemove: InstructionStep) {
    let instructionStepsWithoutRemovedStepOrderedBySequenceNumber = this.recipe.instructionSteps
      .filter(step => step !== instructionStepToRemove)
      .sort((step1, step2) => step1.sequenceNumber - step2.sequenceNumber);

    let newSequenceNumber = 1;
    let newInstructionSteps = [];
    for (const instructionStep of instructionStepsWithoutRemovedStepOrderedBySequenceNumber) {
      newInstructionSteps.push(new InstructionStep(newSequenceNumber, instructionStep.stepInstruction));
      newSequenceNumber++;
    }
    this.recipe.instructionSteps = newInstructionSteps;
  }

  onSubmit() {
    this.recipe.categories = this.categoriesAsCommaSeparatedString.split(',')
      .map(s => s.trim())
      .filter((s: string) => s.length > 0);

    if (!this.recipe.images || this.recipe.images.length === 0) {
      this.recipe.images = []
    }
    this.onRecipeEdit.emit(this.recipe);
  }

  addImage(image: UploadedImage) {
    if (!this.recipe.images || this.recipe.images.length === 0) {
      this.recipe.images = [];
    }
    this.recipe.images.push(new RecipeImage(image.file.name, image.content));
  }

  deleteImage(imageToDelete: RecipeImage) {
    this.recipe.images = this.recipe.images.filter(image => image !== imageToDelete)
  }

  getInstructionStepsOrderedBySequence() {
    return this.recipe.instructionSteps.sort((step1, step2) => step1.sequenceNumber - step2.sequenceNumber);
  }

  private handleEditRecipeResult(editRecipeResult: EditRecipeResult) {
    if (editRecipeResult) {
      switch (editRecipeResult.state) {
        case ResponseResultState.SUCCESS:
          this.initializeIngredientForm();
          this.initializeInstructionStepForm();
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

  private initializeInstructionStepForm() {
    let highestExistingSequenceNumber = Math.max(...this.recipe.instructionSteps.map(step => step.sequenceNumber));
    this.newInstructionStep = new InstructionStep(++highestExistingSequenceNumber, this.newInstructionStep.stepInstruction);
    this.instructionStepForm.resetForm();
  }

  private initializeIngredientForm() {
    this.newIngredient = new Ingredient('', null, '');
    this.ingredientForm.resetForm();
  }

  private resetRecipeForm() {
    this.recipe = new Recipe('', '', null, [], [], [], [], null, null);
    this.categoriesAsCommaSeparatedString = '';
    this.recipeForm.resetForm();
  }
}
