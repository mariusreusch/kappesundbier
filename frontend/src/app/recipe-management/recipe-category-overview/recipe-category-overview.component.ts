import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'kub-recipe-category-overview',
  templateUrl: './recipe-category-overview.component.html',
  styleUrls: ['./recipe-category-overview.component.css']
})
export class RecipeCategoryOverviewComponent {

  @Input()
  recipes: Recipe[];

  @Input()
  category: string;

  constructor() {
  }

}
