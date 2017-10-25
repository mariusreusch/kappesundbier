import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RecipeService } from '../recipe-service';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../recipe';
import { EditRecipeResult } from '../edit-recipe-result';

@Component({
  selector: 'kub-edit-recipe-smart',
  templateUrl: './edit-recipe-smart.component.html',
  styleUrls: ['./edit-recipe-smart.component.css']
})
export class EditRecipeSmartComponent implements OnInit {

  recipe: Observable<Recipe>;
  base64EncodedImages: Observable<any[]>;
  editRecipeResult: Observable<EditRecipeResult>;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.recipe = this.route.paramMap
      .switchMap((params: ParamMap) => this.recipeService.findRecipe(params.get('id')));

    this.base64EncodedImages = this.route.paramMap
      .switchMap((params: ParamMap) => this.recipeService.findRecipeBase64EncodedImages(params.get('id')));
  }

  updateRecipe(recipe: Recipe) {
    this.editRecipeResult = this.recipeService.update(recipe);
  }

  navigateToOverview() {
    this.router.navigate(['/recipe-overview']);
  }
}
