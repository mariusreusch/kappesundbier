package ch.pama.cookncode.rest.dto;

import ch.pama.cookncode.domain.*;
import ch.pama.cookncode.util.OnlyForFramework;

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

  public Recipe toRecipeWithImages(List<RecipeImageDto> recipeImageData) {
    Set<Ingredient> ingredients = this.ingredients.stream().map(IngredientDto::toIngredient).collect(toSet());
    Set<RecipeCategory> categories = this.categories.stream().map(RecipeCategory::new).collect(toSet());
    Set<InstructionStep> instructionSteps = this.instructionSteps.stream().map(InstructionStepDto::toInstructionStep).collect(toSet());
    Recipe recipe = new Recipe(name, numberOfPortions, instructionSteps, ingredients, categories, preparationTime);
    recipeImageData.stream()
        .map(image -> new RecipeImage(image.getFileName(), image.getImageData(), image.getContentType()))
        .forEach(recipe::addImage);
    return recipe;
  }

  public static RecipeDto from(Recipe recipe) {
    Set<IngredientDto> ingredients = recipe.getIngredients().stream().map(IngredientDto::from).collect(toSet());
    Set<String> categories = recipe.getCategories().stream().map(RecipeCategory::getName).collect(toSet());
    Set<InstructionStepDto> instructionSteps = recipe.getInstructionSteps().stream().map(InstructionStepDto::from).collect(toSet());

    return new RecipeDto(recipe.getId().toString(), recipe.getName(), recipe.getNumberOfPortions(),
        instructionSteps, ingredients, categories,
        recipe.getPreparationTime(), recipe.getCreationDate());
  }
}
