import { Component, Input } from '@angular/core';
import { Recipe } from '../../../recipe';

@Component({
  selector: 'kub-recipe-detail-view',
  templateUrl: './recipe-detail-view.component.html',
  styleUrls: ['./recipe-detail-view.component.css']
})
export class RecipeDetailViewComponent {

  @Input()
  private recipe: Recipe;

  @Input()
  private base64EncodedImages: any[];


  constructor() { }


}
