import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { Recipe } from '../recipe';
import { DeleteRecipeResult } from '../delete-recipe-result';

@Component({
  selector: 'kub-recipe-smart-management',
  templateUrl: './recipe-overview-smart.component.html'
})
export class RecipeOverviewSmartComponent implements OnInit {

  deleteRecipeResult: Observable<DeleteRecipeResult>;
  myRecipes: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.myRecipes = this.recipeService.findMyRecipes();
  }

  deleteRecipe(recipe: Recipe) {
    this.deleteRecipeResult = this.recipeService.deleteRecipe(recipe);
  }
}
