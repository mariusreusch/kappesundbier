import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe-service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Recipe } from '../recipe';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'kub-view-recipe-smart',
  templateUrl: './view-recipe-smart.component.html'
})
export class ViewRecipeSmartComponent implements OnInit {

  recipe: Observable<Recipe>;
  base64EncodedImages: Observable<any[]>;

  constructor(private route: ActivatedRoute,
              private service: RecipeService,
              private router: Router) {
  }

  ngOnInit() {
    this.recipe = this.route.paramMap
      .switchMap((params: ParamMap) => this.service.findRecipe(params.get('id')));

    this.base64EncodedImages = this.route.paramMap
      .switchMap((params: ParamMap) => this.service.findRecipeBase64EncodedImages(params.get('id')));
  }

  switchToEditMode(recipe: Recipe) {
    this.route.paramMap.subscribe((params: ParamMap) => this.router.navigate(['/edit-recipe', recipe.id]))
  }
}
