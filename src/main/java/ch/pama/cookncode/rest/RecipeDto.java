package ch.pama.cookncode.rest;

import java.util.ArrayList;
import java.util.List;

public class RecipeDto {

    private String name;
    private int numberOfPortions;
    private List<IngredientDto> ingredients = new ArrayList<>();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNumberOfPortions() {
        return numberOfPortions;
    }

    public void setNumberOfPortions(int numberOfPortions) {
        this.numberOfPortions = numberOfPortions;
    }

    public List<IngredientDto> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<IngredientDto> ingredients) {
        this.ingredients = ingredients;
    }

    public void addIngredient(IngredientDto ingredientDto) {
        this.ingredients.add(ingredientDto);
    }
}
