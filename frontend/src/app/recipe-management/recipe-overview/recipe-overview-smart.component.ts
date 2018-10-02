import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe-service';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe';
import { DeleteRecipeResult } from '../delete-recipe-result';
import { UserService } from '../../authentication/user.service';
import { User } from '../../authentication/user';
import { Router } from '@angular/router';

@Component({
  selector: 'kub-recipe-smart-management',
  templateUrl: './recipe-overview-smart.component.html'
})
export class RecipeOverviewSmartComponent implements OnInit {

  deleteRecipeResult: Observable<DeleteRecipeResult>;
  myRecipes: Observable<Recipe[]>;
  user: Observable<User>;

  constructor(private recipeService: RecipeService, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.myRecipes = this.recipeService.findMyRecipes();
    this.user = this.userService.getUser();
  }

  deleteRecipe(recipe: Recipe) {
    this.deleteRecipeResult = this.recipeService.deleteRecipe(recipe);
  }

  navigateToCategoryRecipes(category: string) {
    this.router.navigate(['recipe-category', category]);
  }

  navigateToRecipeView(recipe: Recipe) {
    this.router.navigate(['view-recipe', recipe.id]);
  }
}
