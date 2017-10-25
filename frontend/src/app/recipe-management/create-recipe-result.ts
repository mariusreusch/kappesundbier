import { ResponseResultState } from './response-result-state';
import { Recipe } from './recipe';

export class CreateRecipeResult {

  constructor(public state: ResponseResultState, public createdRecipe?: Recipe) {
  }
}
