import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../ingredient';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CreateRecipeResult} from '../create-recipe-result';
import {ResponseResultState} from '../response-result-state';
import {Recipe} from '../recipe';
import {UploadedImage} from '../../common/components/image-upload/uploaded-image';
import {TranslateService} from '@ngx-translate/core';
import {RecipeImage} from '../recipe-image';
import {InstructionStep} from '../instruction-step';


@Component({
  selector: 'kub-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent {

  newRecipe = new Recipe('', '', null, [], [], [], [], null, null);
  newIngredient = new Ingredient('', null, '');
  newInstructionStep = new InstructionStep(1, "");
  categoriesAsCommaSeparatedString = '';

  @Output()
  onRecipeCreate = new EventEmitter<Recipe>();

  @Output()
  onRecipeSuccessFullyCreated = new EventEmitter<void>();

  @Input('createRecipeResult')
  set setCreateRecipeResult(createRecipeResult: CreateRecipeResult) {
    this.handleCreateRecipeResult(createRecipeResult)
  }

  @ViewChild('ingredientForm', { static: true }) ingredientForm: NgForm;
  @ViewChild('instructionStepForm', { static: true }) instructionStepForm: NgForm;
  @ViewChild('recipeForm', { static: true }) recipeForm: NgForm;

  constructor(private snackBar: MatSnackBar,
              private translate: TranslateService) {
  }

  addIngredient(): void {
    this.newRecipe.ingredients.push(this.newIngredient);
    this.initializeIngredientForm();
  }

  addInstructionStep() {
    this.newRecipe.instructionSteps.push(this.newInstructionStep);
    this.initializeInstructionStepForm();
  }

  resetIngredientFormIfEmpty() {
    if (!this.newIngredient.name && !this.newIngredient.unitOfMeasurement && !this.newIngredient.amount) {
      this.ingredientForm.resetForm();
    }
  }

  resetInstructionStepFormIfEmpty() {
    if (!this.newInstructionStep.stepInstruction) {
      this.instructionStepForm.resetForm();
    }
  }

  removeIngredient(ingredientToRemove: Ingredient): void {
    const index = this.newRecipe.ingredients.indexOf(ingredientToRemove);
    if (index > -1) {
      this.newRecipe.ingredients.splice(index, 1);
    }
  }

  removeInstructionStep(instructionStepToRemove: InstructionStep) {
    let instructionStepsWithoutRemovedStepOrderedBySequenceNumber = this.newRecipe.instructionSteps
    .filter(step => step !== instructionStepToRemove)
    .sort((step1, step2) => step1.sequenceNumber - step2.sequenceNumber);

    let newSequenceNumber = 1;
    let newInstructionSteps = [];
    for (const instructionStep of instructionStepsWithoutRemovedStepOrderedBySequenceNumber) {
      newInstructionSteps.push(new InstructionStep(newSequenceNumber, instructionStep.stepInstruction));
      newSequenceNumber++;
    }
    this.newRecipe.instructionSteps = newInstructionSteps;
  }

  onSubmit() {
    this.newRecipe.categories = this.categoriesAsCommaSeparatedString.split(',')
    .map(s => s.trim())
    .filter((s: string) => s.length > 0);
    this.onRecipeCreate.emit(this.newRecipe);
  }

  handleCreateRecipeResult(createRecipeResult: CreateRecipeResult) {
    if (createRecipeResult) {
      switch (createRecipeResult.state) {
        case ResponseResultState.SUCCESS:
          this.initializeIngredientForm();
          this.initializeInstructionStepForm();
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

  addImage(image: UploadedImage) {
    this.newRecipe.images.push(new RecipeImage(image.file.name, image.content));
  }

  deleteImage(imageToDelete: RecipeImage) {
    this.newRecipe.images = this.newRecipe.images.filter(image => image !== imageToDelete)
  }

  private initializeIngredientForm() {
    this.newIngredient = new Ingredient('', null, '');
    this.ingredientForm.resetForm();
  }

  private initializeInstructionStepForm() {
    let highestExistingSequenceNumber = Math.max(...this.newRecipe.instructionSteps.map(step => step.sequenceNumber));
    this.newInstructionStep = new InstructionStep(++highestExistingSequenceNumber, this.newInstructionStep.stepInstruction);
    this.instructionStepForm.resetForm();
  }

  private resetRecipeForm() {
    this.newRecipe = new Recipe('', '', null, [], [], [], [], null, null);
    this.categoriesAsCommaSeparatedString = '';
    this.recipeForm.resetForm();
  }
}
