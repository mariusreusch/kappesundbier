import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RecipeService } from '../recipe-service';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../recipe';

@Component({
  selector: 'kub-edit-recipe-smart',
  templateUrl: './edit-recipe-smart.component.html',
  styleUrls: ['./edit-recipe-smart.component.css']
})
export class EditRecipeSmartComponent implements OnInit {

  recipe: Observable<Recipe>;
  base64EncodedImages: Observable<any[]>;


  constructor(private service: RecipeService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipe = this.route.paramMap
      .switchMap((params: ParamMap) => this.service.findRecipe(params.get('id')));

    this.base64EncodedImages = this.route.paramMap
      .switchMap((params: ParamMap) => this.service.findRecipeBase64EncodedImages(params.get('id')));
  }

}
