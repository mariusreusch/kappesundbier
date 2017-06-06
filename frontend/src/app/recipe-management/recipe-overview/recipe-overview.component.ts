import { Component, Input } from "@angular/core";
import { Recipe } from "../recipe";

@Component({
  selector: 'recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.css']
})
export class RecipeOverviewComponent {

  @Input()
  myRecipes: Recipe[]
}
