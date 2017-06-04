import { Component } from "@angular/core";
import { Recipe } from "./recipe";
import { RecipeService } from "./recipe-service";

@Component({
  selector: 'recipe-management',
  templateUrl: './recipe-management.component.html',
  styleUrls: ['./recipe-management.component.css'],
  providers: [RecipeService]
})
export class RecipeManagementComponent {

  constructor(private recipeService: RecipeService) {
  }

  createRecipe(recipe: Recipe) {
    this.recipeService.create(recipe).subscribe();
  }
}
