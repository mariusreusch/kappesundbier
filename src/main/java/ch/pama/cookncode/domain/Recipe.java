package ch.pama.cookncode.domain;

import ch.pama.cookncode.util.OnlyForFramework;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
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

    @OnlyForFramework
    private Recipe() {
    }

    public Recipe(String name, int numberOfPortions, String instruction, Set<Ingredient> ingredients, Set<RecipeCategory> categories) {
        this.name = Objects.requireNonNull(name);
        this.numberOfPortions = Objects.requireNonNull(numberOfPortions);
        this.instruction = Objects.requireNonNull(instruction);
        this.ingredients = new HashSet<>(ingredients);
        this.categories = new HashSet<>(categories);
        this.creationDate = ZonedDateTime.now();
    }

    public Long getId() {
        return id;
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
