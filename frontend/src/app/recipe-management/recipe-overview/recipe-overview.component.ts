import { Component, Input } from "@angular/core";
import { CreateRecipeResult } from "../create-recipe-result";
import { CreateRecipeResultState } from "../create-recipe-result-state";
import { Router } from "@angular/router";
import { Recipe } from "../../recipe";

@Component({
  selector: 'recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.css']
})
export class RecipeOverviewComponent {

  constructor(private router: Router) {
  }

  @Input()
  myRecipes: Recipe[];

  @Input('createRecipeResult')
  set setCreateRecipeResult(createRecipeResult: CreateRecipeResult) {
    if (createRecipeResult && createRecipeResult.state === CreateRecipeResultState.SUCCESS) {
      this.myRecipes.push(createRecipeResult.createdRecipe)
    }
  }

  onSelect(recipe: Recipe) {
    this.router.navigate(['/recipe-detail', recipe.id]);
  }
}
