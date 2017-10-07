import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe-service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Recipe } from '../recipe';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'kub-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Observable<Recipe>;
  base64EncodedImages: Observable<any[]>;
  isInEditMode = false;

  constructor(private route: ActivatedRoute,
              private service: RecipeService) {
  }

  switchToEditMode() {
    this.isInEditMode = true;
  }

  ngOnInit() {
    this.recipe = this.route.paramMap
      .switchMap((params: ParamMap) => this.service.findRecipe(params.get('id')));

    this.base64EncodedImages = this.route.paramMap
      .switchMap((params: ParamMap) => this.service.findRecipeImages(params.get('id')))
      .map((images: any) => {
        const base64EncodedImages = [];
        for (let i = 0; i < images.length; i++) {
          base64EncodedImages.push('data:image/jpg;base64,' + images[i]);
        }
        return base64EncodedImages;
      });

  }
}
