package ch.pama.cookncode.domain;

import ch.pama.cookncode.util.OnlyForFramework;

import javax.persistence.*;
import java.util.*;

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
    @ManyToMany(fetch = EAGER)
    private Set<RecipeCategory> categories;

    @OnlyForFramework
    private Recipe() {
    }

    public Recipe(String name, int numberOfPortions, String instruction, Set<Ingredient> ingredients, Set<RecipeCategory> categories) {
        this.name = Objects.requireNonNull(name);
        this.numberOfPortions = Objects.requireNonNull(numberOfPortions);
        this.instruction = Objects.requireNonNull(instruction);
        this.ingredients = new HashSet<>(ingredients);
        this.categories = new HashSet<>(categories);
    }

    public String getName() {
        return name;
    }

    public int getNumberOfPortions() {
        return numberOfPortions;
    }

    public Set<Ingredient> getIngredients() {
        return ingredients;
    }

    public String getInstruction() {
        return instruction;
    }

    public Set<RecipeCategory> getCategories() {
        return categories;
    }
}
