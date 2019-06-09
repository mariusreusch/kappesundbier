import { Ingredient } from './ingredient';
import { RecipeImage } from './recipe-image';
import {InstructionStep} from './instruction-step';

export class Recipe {

  constructor(public id: string,
              public name: string,
              public numberOfPortions: number,
              public instructionSteps: InstructionStep[],
              public ingredients: Ingredient[],
              public categories: string[],
              public images: RecipeImage[],
              public creationDate: Date,
              public preparationTime: number) {
  }
}
