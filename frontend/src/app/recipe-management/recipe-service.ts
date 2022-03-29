import { Injectable } from '@angular/core';
import { CreateRecipeResult } from './create-recipe-result';
import { ResponseResultState } from './response-result-state';
import { Recipe } from './recipe';
import { DeleteRecipeResult } from './delete-recipe-result';
import { HttpClient } from '@angular/common/http';
import { EditRecipeResult } from './edit-recipe-result';
import { forkJoin, Observable, of as observableOf } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RecipeImage } from './recipe-image';

@Injectable()
export class RecipeService {

  private static createFormDataOf(recipe: Recipe) {
    const formData = new FormData();
    for (const image of recipe.images) {

      const block = image.imageData.split(';');
      const contentType = block[0].split(':')[1];
      const realData = block[1].split(',')[1];
      const blob = RecipeService.b64toBlob(realData, contentType);

      formData.append('file', blob, image.fileName);
    }

    formData.set('recipe', JSON.stringify(recipe));
    return formData;
  }


  private static b64toBlob(b64Data: string, contentType: string) {
    // https://stackoverflow.com/a/16245768/1992820
    contentType = contentType || '';

    const sliceSize = 512;
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, {type: contentType});
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

  findMyRecipesByCategory(category: string) {
    return this.httpClient.get<Recipe[]>('./api/recipes?category=' + category);
  }

  findRecipeWithImages(id: string): Observable<Recipe> {
    return forkJoin([
      this.findRecipe(id),
      this.findRecipeBase64EncodedImages(id)]
    ).pipe(map(data => {
      const recipe: Recipe = data[0];
      recipe.images = data[1];
      return recipe;
    }));
  }

  private findRecipe(id: string): Observable<Recipe> {
    return this.httpClient.get<Recipe>('./api/recipes/' + id);
  }

  private findRecipeBase64EncodedImages(id: string): Observable<RecipeImage[]> {
    return this.httpClient.get<any>('./api/recipes/' + id + '/images').pipe(
      map((images: RecipeImage[]) => {
        const base64EncodedImages = [];
        for (const image of images) {
          base64EncodedImages.push(new RecipeImage(image.fileName, 'data:' + image.contentType + ';base64,' + image.imageData));
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
