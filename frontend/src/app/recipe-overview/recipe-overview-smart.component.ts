import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe-management/recipe-service';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe-management/recipe';
import { UserService } from '../authentication/user.service';
import { User } from '../authentication/user';
import { Router } from '@angular/router';

@Component({
  selector: 'kub-recipe-smart-management',
  templateUrl: './recipe-overview-smart.component.html'
})
export class RecipeOverviewSmartComponent implements OnInit {

  myRecipes: Observable<Recipe[]>;
  user: Observable<User>;

  constructor(private recipeService: RecipeService, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.myRecipes = this.recipeService.findMyRecipes();
    this.user = this.userService.getUser();
  }

  navigateToCategoryRecipes(category: string) {
    this.router.navigate(['recipe-category', category]);
  }

  navigateToRecipeView(recipe: Recipe) {
    this.router.navigate(['view-recipe', recipe.id]);
  }
}
