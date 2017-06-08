import { Component, Input } from "@angular/core";
import { Recipe } from "../recipe";
import { CreateRecipeResult } from "../create-recipe-result";
import { CreateRecipeResultState } from "../create-recipe-result-state";

@Component({
  selector: 'recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.css']
})
export class RecipeOverviewComponent {

  @Input()
  myRecipes: Recipe[]

  @Input('createRecipeResult')
  set setCreateRecipeResult(createRecipeResult: CreateRecipeResult) {
    if (createRecipeResult && createRecipeResult.state === CreateRecipeResultState.SUCCESS) {
      this.myRecipes.push(createRecipeResult.createdRecipe)
    }
  }
}
