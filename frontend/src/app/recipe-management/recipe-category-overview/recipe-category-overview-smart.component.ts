import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipes = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const categoryName = params.get('category-name');
        this.category = categoryName;
        return this.recipeService.findMyRecipesWithCategory(categoryName);
      }));
  }


}
