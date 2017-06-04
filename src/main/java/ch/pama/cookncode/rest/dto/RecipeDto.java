package ch.pama.cookncode.rest.dto;

import ch.pama.cookncode.domain.Ingredient;
import ch.pama.cookncode.domain.Recipe;

import java.util.ArrayList;
import java.util.List;

import static java.util.stream.Collectors.toList;

public class RecipeDto {

    private String name;
    private int numberOfPortions;
    private List<IngredientDto> ingredients = new ArrayList<>();

    private RecipeDto() {
    }

    private RecipeDto(String name, int numberOfPortions, List<IngredientDto> ingredients) {
        this.name = name;
        this.numberOfPortions = numberOfPortions;
        this.ingredients = ingredients;
    }

    public String getName() {
        return name;
    }

    public int getNumberOfPortions() {
        return numberOfPortions;
    }

    public List<IngredientDto> getIngredients() {
        return ingredients;
    }

    public Recipe toRecipe(){
        List<Ingredient> ingredients = this.ingredients.stream().map(IngredientDto::toIngredient).collect(toList());
        return new Recipe(name, numberOfPortions, ingredients);
    }

    public static RecipeDto from(Recipe recipe) {
        List<IngredientDto> ingredients = recipe.getIngredients().stream().map(IngredientDto::from).collect(toList());
        return new RecipeDto(recipe.getName(), recipe.getNumberOfPortions(), ingredients);
    }
}
