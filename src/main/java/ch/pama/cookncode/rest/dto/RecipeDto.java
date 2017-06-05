package ch.pama.cookncode.rest.dto;

import ch.pama.cookncode.domain.Ingredient;
import ch.pama.cookncode.domain.Recipe;
import ch.pama.cookncode.domain.RecipeCategory;
import ch.pama.cookncode.util.OnlyForFramework;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static java.util.stream.Collectors.toList;
import static java.util.stream.Collectors.toSet;

public class RecipeDto {

    private String name;
    private int numberOfPortions;
    private String instruction;
    private Set<IngredientDto> ingredients = new HashSet<>();
    private Set<String> categories = new HashSet<>();

    @OnlyForFramework
    private RecipeDto() {
    }

    private RecipeDto(String name, int numberOfPortions, String instruction, Set<IngredientDto> ingredients, Set<String> categories) {
        this.name = name;
        this.numberOfPortions = numberOfPortions;
        this.instruction = instruction;
        this.ingredients = new HashSet<>(ingredients);
        this.categories = new HashSet<>(categories);
    }

    public String getName() {
        return name;
    }

    public int getNumberOfPortions() {
        return numberOfPortions;
    }

    public Set<IngredientDto> getIngredients() {
        return ingredients;
    }

    public String getInstruction() {
        return instruction;
    }

    public Set<String> getCategories() {
        return categories;
    }

    public Recipe toRecipe() {
        Set<Ingredient> ingredients = this.ingredients.stream().map(IngredientDto::toIngredient).collect(toSet());
        Set<RecipeCategory> categories = this.categories.stream().map(RecipeCategory::new).collect(toSet());
        return new Recipe(name, numberOfPortions, instruction, ingredients, categories);
    }

    public static RecipeDto from(Recipe recipe) {
        Set<IngredientDto> ingredients = recipe.getIngredients().stream().map(IngredientDto::from).collect(toSet());
        Set<String> categories = recipe.getCategories().stream().map(RecipeCategory::getName).collect(toSet());
        return new RecipeDto(recipe.getName(), recipe.getNumberOfPortions(), recipe.getInstruction(), ingredients, categories);
    }
}
