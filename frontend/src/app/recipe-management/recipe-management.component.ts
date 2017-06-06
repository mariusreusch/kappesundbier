import { Component, OnInit } from "@angular/core";
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
export class RecipeManagementComponent implements OnInit {

  creareRecipeResult: Observable<CreateRecipeResult>;
  myRecipes: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.myRecipes = this.recipeService.findMyRecipes();
  }

  createRecipe(recipe: Recipe) {
    this.creareRecipeResult = this.recipeService.create(recipe);
  }
}
