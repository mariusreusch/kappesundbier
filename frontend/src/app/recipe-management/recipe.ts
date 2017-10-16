import { Ingredient } from './ingredient';
import { FileToUpload } from '../kub-common/file-upload/file-to-upload';

export class Recipe {

  constructor(public id: string,
              public name: string,
              public numberOfPortions: number,
              public instruction: string,
              public ingredients: Ingredient[],
              public categories: string[],
              public images: FileToUpload[],
              public creationDate: Date) {
  }
}
