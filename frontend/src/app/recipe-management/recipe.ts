import { Ingredient } from './ingredient';
import { RecipeImage } from './recipe-image';

export class Recipe {

  constructor(public id: string,
              public name: string,
              public numberOfPortions: number,
              public instruction: string,
              public ingredients: Ingredient[],
              public categories: string[],
              public images: RecipeImage[],
              public creationDate: Date) {
  }
}
