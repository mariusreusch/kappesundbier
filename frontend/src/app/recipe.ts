import { Ingredient } from './recipe-management/ingredient';
import { FileToUpload } from './recipe-management/file-upload/file-to-upload';

export class Recipe {

  constructor(public id: string,
              public name: string,
              public numberOfPortions: number,
              public instruction: string,
              public ingredients: Ingredient[],
              public categories: string[],
              public images: FileToUpload[]) {
  }
}
