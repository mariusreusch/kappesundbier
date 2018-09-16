import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe-service';
import { Recipe } from '../recipe';
import { Observable } from 'rxjs';
import { CreateRecipeResult } from '../create-recipe-result';

@Component({
  selector: 'kub-create-recipe-smart',
  templateUrl: './create-recipe-smart.component.html'
})
export class CreateRecipeSmartComponent {

  createRecipeResult: Observable<CreateRecipeResult>;

  constructor(private router: Router,
              private recipeService: RecipeService) {
  }

  createRecipe(recipe: Recipe) {
    this.createRecipeResult = this.recipeService.create(recipe);
  }

  navigateToOverview() {
    this.router.navigate(['/recipe-overview']);
  }
}
