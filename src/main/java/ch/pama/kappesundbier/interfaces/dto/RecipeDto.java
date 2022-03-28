package ch.pama.kappesundbier.interfaces.dto;

import ch.pama.kappesundbier.domain.PreparationTime;
import ch.pama.kappesundbier.infrastructure.db.*;
import ch.pama.kappesundbier.shared.util.OnlyForFramework;

import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static java.util.stream.Collectors.toSet;

public class RecipeDto {

    private String id;
    private String name;
    private int numberOfPortions;
    private Set<InstructionStepDto> instructionSteps;
    private Set<IngredientDto> ingredients = new HashSet<>();
    private Set<String> categories = new HashSet<>();
    private PreparationTime preparationTime;
    private ZonedDateTime creationDate;

    @OnlyForFramework
    private RecipeDto() {
    }

    private RecipeDto(String id, String name, int numberOfPortions, Set<InstructionStepDto> instructionSteps,
                      Set<IngredientDto> ingredients, Set<String> categories, PreparationTime preparationTime,
                      ZonedDateTime creationDate) {
        this.id = id;
        this.name = name;
        this.numberOfPortions = numberOfPortions;
        this.instructionSteps = instructionSteps;
        this.ingredients = new HashSet<>(ingredients);
        this.categories = new HashSet<>(categories);
        this.preparationTime = preparationTime;
        this.creationDate = creationDate;
    }

    public String getId() {
        return id;
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

    public Set<InstructionStepDto> getInstructionSteps() {
        return instructionSteps;
    }

    public Set<String> getCategories() {
        return categories;
    }

    public PreparationTime getPreparationTime() {
        return preparationTime;
    }

    public ZonedDateTime getCreationDate() {
        return creationDate;
    }

    public RecipeDbEntity toRecipeWithImages(List<RecipeImageDto> recipeImageData) {
        Set<IngredientDbEntity> ingredients = this.ingredients.stream().map(IngredientDto::toIngredient).collect(toSet());
        Set<RecipeCategoryDbEntity> categories = this.categories.stream().map(RecipeCategoryDbEntity::new).collect(toSet());
        Set<InstructionStepDbEntity> instructionSteps = this.instructionSteps.stream().map(InstructionStepDto::toInstructionStep).collect(toSet());
        RecipeDbEntity recipe = new RecipeDbEntity(name, numberOfPortions, instructionSteps, ingredients, categories, preparationTime);
        recipeImageData.stream()
                .map(image -> new RecipeImageDbEntity(image.getFileName(), image.getImageData(), image.getContentType()))
                .forEach(recipe::addImage);
        return recipe;
    }

    public static RecipeDto from(RecipeDbEntity recipe) {
        Set<IngredientDto> ingredients = recipe.getIngredients().stream().map(IngredientDto::from).collect(toSet());
        Set<String> categories = recipe.getCategories().stream().map(RecipeCategoryDbEntity::getName).collect(toSet());
        Set<InstructionStepDto> instructionSteps = recipe.getInstructionSteps().stream().map(InstructionStepDto::from).collect(toSet());

        return new RecipeDto(recipe.getId().toString(), recipe.getName(), recipe.getNumberOfPortions(),
                instructionSteps, ingredients, categories,
                recipe.getPreparationTime(), recipe.getCreationDate());
    }
}
