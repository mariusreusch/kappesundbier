import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { CreateRecipeResult } from "./create-recipe-result";
import { CreateRecipeResultState } from "./create-recipe-result-state";
import { Observable } from "rxjs/Observable";
import { Recipe } from "../recipe";

@Injectable()
export class RecipeService {

  constructor(private http: Http) {
  }

  create(recipe: Recipe) {
    return this.http.post("./api/recipes", recipe)
      .map((response) => RecipeService.handleData(response))
      .catch(RecipeService.handleError);
  }

  findMyRecipes() {
    return this.http.get("./api/recipes")
      .map(response => response.json());
  }

  findRecipe(id: string) {
    return this.http.get("./api/recipes/" + id)
      .map(response => response.json());
  }

  private static handleData(response: any) {
    let createdRecipe: Recipe = response.json();
    return new CreateRecipeResult(CreateRecipeResultState.SUCCESS, createdRecipe);
  }

  private static handleError() {
    return Observable.of(new CreateRecipeResult(CreateRecipeResultState.FAILED));
  }
}
