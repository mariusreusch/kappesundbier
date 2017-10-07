import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe-service';
import { Observable } from 'rxjs/Observable';
import { CreateRecipeResult } from './create-recipe-result';
import 'rxjs/add/operator/share';
import { Recipe } from './recipe';
import { DeleteRecipeResult } from './delete-recipe-result';

@Component({
  selector: 'kub-recipe-management',
  templateUrl: './recipe-management.component.html',
  styleUrls: ['./recipe-management.component.css']
})
export class RecipeManagementComponent implements OnInit {

  createRecipeResult: Observable<CreateRecipeResult>;
  deleteRecipeResult: Observable<DeleteRecipeResult>;
  myRecipes: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.myRecipes = this.recipeService.findMyRecipes();
  }

  createRecipe(recipe: Recipe) {
    this.createRecipeResult = this.recipeService.create(recipe).share();
  }

  deleteRecipe(recipe: Recipe) {
    this.deleteRecipeResult = this.recipeService.deleteRecipe(recipe);
  }
}
