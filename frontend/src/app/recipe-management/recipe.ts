import { Ingredient } from "./ingredient";

export class Recipe {


  constructor(public name: string, public numberOfPortions: number,
              public instruction: string, public ingredients: Ingredient[],
              public categories: string[]) {
  }
}
