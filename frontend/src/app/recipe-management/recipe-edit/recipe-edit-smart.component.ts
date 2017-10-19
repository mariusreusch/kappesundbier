import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RecipeService } from '../recipe-service';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../recipe';

@Component({
  selector: 'kub-recipe-edit-smart',
  templateUrl: './recipe-edit-smart.component.html',
  styleUrls: ['./recipe-edit-smart.component.css']
})
export class RecipeEditSmartComponent implements OnInit {

  recipe: Observable<Recipe>;
  base64EncodedImages: Observable<any[]>;


  constructor(private service: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.recipe = this.route.paramMap
      .switchMap((params: ParamMap) => this.service.findRecipe(params.get('id')));

    this.base64EncodedImages = this.route.paramMap
      .switchMap((params: ParamMap) => this.service.findRecipeBase64EncodedImages(params.get('id')));
  }

}
