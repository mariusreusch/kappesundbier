import { Component } from "@angular/core";
import { Ingredient } from "./ingredient";

@Component({
    selector: 'recipe-overview',
    templateUrl: './recipe-overview.component.html',
    styleUrls: ['./recipe-overview.component.css']
})
export class RecipeOverviewComponent {

    ingredients: Ingredient[] = [];
    visibilitySliderState = "Private";

    addIngredient(): void {
        this.ingredients.push({name: '', unitOfMeasurement: ''});
    }

    removeIngredient(ingredientToRemove: Ingredient): void {
        let index = this.ingredients.indexOf(ingredientToRemove);
        if (index > -1) {
            this.ingredients.splice(index, 1);
        }
    }

    toggleSlider(): void {
        if (this.visibilitySliderState === "Private") {
            this.visibilitySliderState = "Public";
        } else {
            this.visibilitySliderState = "Private";
        }
    }
}
