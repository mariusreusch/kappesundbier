package ch.pama.cookncode.domain;

import ch.pama.cookncode.util.OnlyForFramework;

import javax.persistence.*;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import static javax.persistence.CascadeType.ALL;
import static javax.persistence.FetchType.EAGER;

@Entity
public class Recipe {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private int numberOfPortions;
  @ManyToMany(fetch = EAGER, cascade = ALL)
  private Set<Ingredient> ingredients;
  @OneToMany(cascade = ALL, orphanRemoval = true)
  @JoinColumn(name = "fk_recipe_id")
  private Set<InstructionStep> instructionSteps;
  @ManyToMany(fetch = EAGER, cascade = ALL)
  private Set<RecipeCategory> categories;
  private ZonedDateTime creationDate;
  @OneToMany(cascade = ALL)
  @JoinColumn(name = "fk_recipe_id")
  private Set<RecipeImage> recipeImages;
  @Column(name = "preparation_time_in_minutes")
  private PreparationTime preparationTime;

  @OnlyForFramework
  private Recipe() {
  }

  public Recipe(String name, int numberOfPortions, Set<InstructionStep> instructionSteps, Set<Ingredient> ingredients,
      Set<RecipeCategory> categories, PreparationTime preparationTime) {
    this.name = Objects.requireNonNull(name);
    this.numberOfPortions = numberOfPortions;
    this.instructionSteps = new HashSet<>(instructionSteps);
    this.ingredients = new HashSet<>(ingredients);
    this.categories = new HashSet<>(requireNotEmpty(categories));
    this.preparationTime = preparationTime;
    this.creationDate = ZonedDateTime.now();
    this.recipeImages = new HashSet<>();
  }

  private Set<RecipeCategory> requireNotEmpty(Set<RecipeCategory> categories) {
    if (categories == null || categories.isEmpty()) {
      throw new IllegalArgumentException("A recipe must have at least one category.");
    }
    return categories;
  }

  public void addImage(RecipeImage recipeImage) {
    this.recipeImages.add(recipeImage);
  }

  public Long getId() {
    return id;
  }

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

  public Set<Ingredient> getIngredients() {
    return ingredients;
  }

  public void setIngredients(Set<Ingredient> ingredients) {
    this.ingredients = ingredients;
  }

  public Set<InstructionStep> getInstructionSteps() {
    return instructionSteps;
  }

  public void setInstructionSteps(Set<InstructionStep> instructionSteps) {
    this.instructionSteps.clear();
    this.instructionSteps.addAll(instructionSteps);
  }

  public Set<RecipeCategory> getCategories() {
    return categories;
  }

  public void setCategories(Set<RecipeCategory> categories) {
    this.categories = categories;
  }

  public Set<RecipeImage> getRecipeImages() {
    return recipeImages;
  }

  public void setRecipeImages(Set<RecipeImage> recipeImages) {
    this.recipeImages = recipeImages;
  }

  public PreparationTime getPreparationTime() {
    return preparationTime;
  }

  public void setPreparationTime(PreparationTime preparationTime) {
    this.preparationTime = preparationTime;
  }

  public ZonedDateTime getCreationDate() {
    return creationDate;
  }

}
