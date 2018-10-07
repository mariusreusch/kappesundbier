import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { RecipeService } from '../recipe-service';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe';

@Component({
  selector: 'kub-recipe-category-overview-smart',
  templateUrl: './recipe-category-overview-smart.component.html'
})
export class RecipeCategoryOverviewSmartComponent implements OnInit {

  recipes: Observable<Recipe[]>;
  category: string;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.recipes = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const categoryName = params.get('category-name');
        this.category = categoryName;
        return this.recipeService.findMyRecipesByCategory(categoryName);
      }));
  }

  navigateToRecipeDetailView(recipe: Recipe) {
    this.router.navigate(['view-recipe', recipe.id]);
  }
}
