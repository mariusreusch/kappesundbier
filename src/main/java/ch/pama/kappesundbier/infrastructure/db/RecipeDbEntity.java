package ch.pama.kappesundbier.infrastructure.db;

import ch.pama.kappesundbier.domain.PreparationTime;
import ch.pama.kappesundbier.domain.RecipeIdentifier;
import ch.pama.kappesundbier.shared.util.OnlyForFramework;

import javax.persistence.*;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import static javax.persistence.CascadeType.ALL;
import static javax.persistence.FetchType.EAGER;

@Entity
@Table(name = "recipe")
public class RecipeDbEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int numberOfPortions;
    @ManyToMany(fetch = EAGER, cascade = ALL)
    @JoinTable(name = "recipe_ingredients",
            joinColumns = @JoinColumn(name = "recipe_id"),
            inverseJoinColumns = @JoinColumn(name = "ingredients_id"))
    private Set<IngredientDbEntity> ingredients;
    @OneToMany(cascade = ALL, orphanRemoval = true)
    @JoinColumn(name = "fk_recipe_id")
    private Set<InstructionStepDbEntity> instructionSteps;
    @JoinTable(name = "recipe_categories",
            joinColumns = @JoinColumn(name = "recipe_id"),
            inverseJoinColumns = @JoinColumn(name = "categories_id"))
    @ManyToMany(fetch = EAGER, cascade = ALL)
    private Set<RecipeCategoryDbEntity> categories;
    private ZonedDateTime creationDate;
    @OneToMany(cascade = ALL)
    @JoinColumn(name = "fk_recipe_id")
    private Set<RecipeImageDbEntity> recipeImages;
    @Column(name = "preparation_time_in_minutes")
    private PreparationTime preparationTime;

    @OnlyForFramework
    private RecipeDbEntity() {
    }

    public RecipeDbEntity(String name, int numberOfPortions, Set<InstructionStepDbEntity> instructionSteps, Set<IngredientDbEntity> ingredients,
                          Set<RecipeCategoryDbEntity> categories, PreparationTime preparationTime) {
        this.name = Objects.requireNonNull(name);
        this.numberOfPortions = numberOfPortions;
        this.instructionSteps = new HashSet<>(instructionSteps);
        this.ingredients = new HashSet<>(ingredients);
        this.categories = new HashSet<>(requireNotEmpty(categories));
        this.preparationTime = preparationTime;
        this.creationDate = ZonedDateTime.now();
        this.recipeImages = new HashSet<>();
    }

    private Set<RecipeCategoryDbEntity> requireNotEmpty(Set<RecipeCategoryDbEntity> categories) {
        if (categories == null || categories.isEmpty()) {
            throw new IllegalArgumentException("A recipe must have at least one category.");
        }
        return categories;
    }

    public void addImage(RecipeImageDbEntity recipeImage) {
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

    public Set<IngredientDbEntity> getIngredients() {
        return ingredients;
    }

    public void setIngredients(Set<IngredientDbEntity> ingredients) {
        this.ingredients = ingredients;
    }

    public Set<InstructionStepDbEntity> getInstructionSteps() {
        return instructionSteps;
    }

    public void setInstructionSteps(Set<InstructionStepDbEntity> instructionSteps) {
        this.instructionSteps.clear();
        this.instructionSteps.addAll(instructionSteps);
    }

    public Set<RecipeCategoryDbEntity> getCategories() {
        return categories;
    }

    public void setCategories(Set<RecipeCategoryDbEntity> categories) {
        this.categories = categories;
    }

    public Set<RecipeImageDbEntity> getRecipeImages() {
        return recipeImages;
    }

    public void setRecipeImages(Set<RecipeImageDbEntity> recipeImages) {
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
