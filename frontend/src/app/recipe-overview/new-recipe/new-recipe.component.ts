import { Component, ViewChild } from "@angular/core";
import { Ingredient } from "../ingredient";
import { Recipe } from "../recipe";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {

  newRecipe = new Recipe("", []);
  newIngredient = new Ingredient("", null, "");

  @ViewChild('ingredientForm') ingredientForm: NgForm;

  addIngredient(): void {
    this.newRecipe.ingredients.push(this.newIngredient);
    this.newIngredient = new Ingredient("", null, "");
    this.ingredientForm.resetForm();
  }

  removeIngredient(ingredientToRemove: Ingredient): void {
    let index = this.newRecipe.ingredients.indexOf(ingredientToRemove);
    if (index > -1) {
      this.newRecipe.ingredients.splice(index, 1);
    }
  }

  onSubmit() {
    if (this.newRecipe.ingredients.length > 1) {
      console.log("valid recipe");
    }
    console.log("recipe form submitted");
  }
}
