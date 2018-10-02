import { Injectable } from '@angular/core';
import { CreateRecipeResult } from './create-recipe-result';
import { ResponseResultState } from './response-result-state';
import { Recipe } from './recipe';
import { DeleteRecipeResult } from './delete-recipe-result';
import { HttpClient } from '@angular/common/http';
import { EditRecipeResult } from './edit-recipe-result';
import { of as observableOf } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class RecipeService {

  private static createFormDataOf(recipe: Recipe) {
    const formData = new FormData();
    for (const file of recipe.images.map(img => img.file)) {
      formData.append('file', file, file.name);
    }

    formData.set('recipe', JSON.stringify(recipe));
    return formData;
  }

  constructor(private httpClient: HttpClient) {
  }

  create(recipe: Recipe) {
    return this.httpClient.post('./api/recipes', RecipeService.createFormDataOf(recipe))
      .pipe(
        map((response: any) => new CreateRecipeResult(ResponseResultState.SUCCESS, response)),
        catchError(() => observableOf(new CreateRecipeResult(ResponseResultState.FAILED))))
  }

  findMyRecipes() {
    return this.httpClient.get<Recipe[]>('./api/recipes');
  }

  findMyRecipesWithCategory(category: string) {
    return this.httpClient.get<Recipe[]>('./api/recipes?category=' + category);
  }

  findRecipe(id: string) {
    return this.httpClient.get<Recipe>('./api/recipes/' + id);
  }

  findRecipeImages(id: string) {
    return this.httpClient.get<any>('./api/recipes/' + id + '/images');
  }

  findRecipeBase64EncodedImages(id: string) {
    return this.findRecipeImages(id).pipe(
      map((images: any) => {
        const base64EncodedImages = [];
        for (let i = 0; i < images.length; i++) {
          base64EncodedImages.push('data:image/jpg;base64,' + images[i]);
        }
        return base64EncodedImages;
      }));
  }

  update(recipe: Recipe) {
    return this.httpClient.put('./api/recipes/' + recipe.id, RecipeService.createFormDataOf(recipe)).pipe(
      map((response: any) => new EditRecipeResult(ResponseResultState.SUCCESS, response)),
      catchError(() => observableOf(new EditRecipeResult(ResponseResultState.FAILED))));

  }

  deleteRecipe(recipe: Recipe) {
    return this.httpClient.delete('./api/recipes/' + recipe.id).pipe(
      map((response: any) => new DeleteRecipeResult(ResponseResultState.SUCCESS, response)),
      catchError(() => observableOf(new DeleteRecipeResult(ResponseResultState.FAILED))));
  }
}
