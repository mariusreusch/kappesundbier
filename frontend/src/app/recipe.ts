import { Ingredient } from "./recipe-management/ingredient";

export class Recipe {

  constructor(public id: string,
              public name: string,
              public numberOfPortions: number,
              public instruction: string,
              public ingredients: Ingredient[],
              public categories: string[]) {
  }
}
