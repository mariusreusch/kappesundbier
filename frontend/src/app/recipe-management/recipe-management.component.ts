import { Component } from "@angular/core";
import { Recipe } from "./recipe";
import { RecipeService } from "./recipe-service";
import { Observable } from "rxjs/Observable";
import { CreateRecipeResult } from "./create-recipe-result";

@Component({
  selector: 'recipe-management',
  templateUrl: './recipe-management.component.html',
  styleUrls: ['./recipe-management.component.css'],
  providers: [RecipeService]
})
export class RecipeManagementComponent {

  creareRecipeResult: Observable<CreateRecipeResult>;

  constructor(private recipeService: RecipeService) {
  }

  createRecipe(recipe: Recipe) {
    this.creareRecipeResult = this.recipeService.create(recipe);
  }
}
