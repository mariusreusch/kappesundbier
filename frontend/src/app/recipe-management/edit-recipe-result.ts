import { ResponseResultState } from './response-result-state';
import { Recipe } from './recipe';

export class EditRecipeResult {

  constructor(public state: ResponseResultState, public editedRecipe?: Recipe) {
  }
}
