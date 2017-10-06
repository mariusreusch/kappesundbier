import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CreateRecipeResult } from './create-recipe-result';
import { CreateRecipeResultState } from './create-recipe-result-state';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../recipe';
import { DeleteRecipeResult } from './delete-recipe-result';
import { DeleteRecipeResultState } from './delete-recipe-result-state';

@Injectable()
export class RecipeService {

  private static handleData(response: any) {
    const createdRecipe: Recipe = response.json();
    return new CreateRecipeResult(CreateRecipeResultState.SUCCESS, createdRecipe);
  }

  private static handleError() {
    return Observable.of(new CreateRecipeResult(CreateRecipeResultState.FAILED));
  }

  constructor(private http: Http) {
  }

  create(recipe: Recipe) {
    const formData: FormData = new FormData();
    for (const file of recipe.images.map(img => img.file)) {
      formData.append('file', file, file.name);
    }

    formData.set('recipe', JSON.stringify(recipe));

    return this.http.post('./api/recipes', formData)
      .map((response) => RecipeService.handleData(response))
      .catch(RecipeService.handleError);
  }

  findMyRecipes() {
    return this.http.get('./api/recipes')
      .map(response => response.json());
  }

  findRecipe(id: string) {
    return this.http.get('./api/recipes/' + id)
      .map(response => response.json());
  }

  findRecipeImages(id: string) {
    return this.http.get('./api/recipes/' + id + '/images');
  }

  deleteRecipe(recipe: Recipe) {
    return this.http.delete('./api/recipes/' + recipe.id)
      .map((response) => new DeleteRecipeResult(DeleteRecipeResultState.SUCCESS, response.json().deletedRecipeId))
      .catch(() => Observable.of(new DeleteRecipeResult(DeleteRecipeResultState.FAILED)));
  }
}
