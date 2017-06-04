import { Component } from "@angular/core";
import { Recipe } from "./recipe";
import { RecipeService } from "./recipe-service";

@Component({
  selector: 'recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.css'],
  providers: [RecipeService]
})
export class RecipeOverviewComponent {

  constructor(private recipeService: RecipeService) {
  }

  createRecipe(recipe: Recipe) {
    this.recipeService.create(recipe).subscribe();
  }
}
