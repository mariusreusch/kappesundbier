import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe-service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Recipe } from '../recipe';
import { Observable } from 'rxjs';
import { DeleteRecipeResult } from '../delete-recipe-result';
import { ResponseResultState } from '../response-result-state';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'kub-view-recipe-smart',
  templateUrl: './view-recipe-smart.component.html'
})
export class ViewRecipeSmartComponent implements OnInit {

  recipe: Observable<Recipe>;
  base64EncodedImages: Observable<any[]>;
  deleteDialogTitle: Observable<string>;
  deleteDialogQuestion: Observable<string>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService,
              private snackBar: MatSnackBar,
              private translate: TranslateService) {
  }

  ngOnInit() {
    this.recipe = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.recipeService.findRecipe(params.get('id'))));

    this.base64EncodedImages = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.recipeService.findRecipeBase64EncodedImages(params.get('id'))));

    this.deleteDialogQuestion = this.translate.get('Recipe.DeleteDialogQuestion');
    this.deleteDialogTitle = this.translate.get('Recipe.DeleteDialogTitle');
  }

  switchToEditMode(recipe: Recipe) {
    this.router.navigate(['/edit-recipe', recipe.id]);
  }

  onRecipeDeleted(recipe: Recipe) {
    this.recipeService.deleteRecipe(recipe).subscribe(
      (deleteRecipeResult: DeleteRecipeResult) => {
        if (deleteRecipeResult && deleteRecipeResult.state === ResponseResultState.SUCCESS) {
          this.router.navigate(['/']);
          this.translate.get('Recipe.DeleteRecipe').subscribe(text => {
            this.snackBar.open(text, null, {
              duration: 4000,
            });
          });
        }
      }
    );
  }

}
