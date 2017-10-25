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

    @GeneratedValue
    @Id
    private Long id;
    private String name;
    private int numberOfPortions;
    @ManyToMany(fetch = EAGER, cascade = ALL)
    private Set<Ingredient> ingredients;
    private String instruction;
    @ManyToMany(fetch = EAGER, cascade = ALL)
    private Set<RecipeCategory> categories;
    private ZonedDateTime creationDate;
    @OneToMany(cascade = ALL)
    @JoinColumn(name = "fk_recipe_id")
    private Set<RecipeImage> recipeImages;

    @OnlyForFramework
    private Recipe() {
    }

    public Recipe(String name, int numberOfPortions, String instruction, Set<Ingredient> ingredients, Set<RecipeCategory> categories) {
        this.name = Objects.requireNonNull(name);
        this.numberOfPortions = numberOfPortions;
        this.instruction = Objects.requireNonNull(instruction);
        this.ingredients = new HashSet<>(ingredients);
        this.categories = new HashSet<>(categories);
        this.creationDate = ZonedDateTime.now();
        this.recipeImages = new HashSet<>();
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

    public String getInstruction() {
        return instruction;
    }

    public void setInstruction(String instruction) {
        this.instruction = instruction;
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

    public ZonedDateTime getCreationDate() {
        return creationDate;
    }


}
