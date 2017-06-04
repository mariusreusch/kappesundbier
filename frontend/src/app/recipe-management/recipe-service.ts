import { Injectable } from "@angular/core";
import { Recipe } from "./recipe";
import { Http } from "@angular/http";

@Injectable()
export class RecipeService {

  constructor(private http:Http){
  }

  create(recipe: Recipe) {
    return this.http.post("./api/recipes", recipe);
  }
}
