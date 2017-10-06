import { CreateRecipeResultState } from './create-recipe-result-state';
import { Recipe } from './recipe';

export class CreateRecipeResult {

  constructor(public state: CreateRecipeResultState, public createdRecipe?: Recipe) {
  }
}
