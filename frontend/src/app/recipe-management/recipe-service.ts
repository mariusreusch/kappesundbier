import { Injectable } from '@angular/core';
import { CreateRecipeResult } from './create-recipe-result';
import { CreateRecipeResultState } from './create-recipe-result-state';
import { Observable } from 'rxjs/Observable';
import { Recipe } from './recipe';
import { DeleteRecipeResult } from './delete-recipe-result';
import { DeleteRecipeResultState } from './delete-recipe-result-state';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecipeService {

  private static handleData(recipe) {
    return new CreateRecipeResult(CreateRecipeResultState.SUCCESS, recipe);
  }

  private static handleError() {
    return Observable.of(new CreateRecipeResult(CreateRecipeResultState.FAILED));
  }

  constructor(private httpClient: HttpClient) {
  }

  create(recipe: Recipe) {
    const formData: FormData = new FormData();
    for (const file of recipe.images.map(img => img.file)) {
      formData.append('file', file, file.name);
    }

    formData.set('recipe', JSON.stringify(recipe));

    return this.httpClient.post('./api/recipes', formData)
      .map((response) => RecipeService.handleData(response))
      .catch(RecipeService.handleError);
  }

  findMyRecipes(): any {
    return this.httpClient.get('./api/recipes')
      .map(response => response);
  }

  findRecipe(id: string) {
    return this.httpClient.get<Recipe>('./api/recipes/' + id);
  }

  findRecipeImages(id: string) {
    return this.httpClient.get<any>('./api/recipes/' + id + '/images');
  }

  deleteRecipe(recipe: Recipe) {
    return this.httpClient.delete('./api/recipes/' + recipe.id)
      .map((response: any) => new DeleteRecipeResult(DeleteRecipeResultState.SUCCESS, response))
      .catch(() => Observable.of(new DeleteRecipeResult(DeleteRecipeResultState.FAILED)));
  }
}
