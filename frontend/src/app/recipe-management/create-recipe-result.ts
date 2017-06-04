import { Recipe } from "./recipe";
import { CreateRecipeResultState } from "./create-recipe-result-state";

export class CreateRecipeResult {

  constructor(public state: CreateRecipeResultState, public createdRecipe?: Recipe) {
  }
}
