package ch.pama.cookncode.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

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
    private List<Ingredient> ingredients;

    private Recipe() {
    }

    public Recipe(String name, int numberOfPortions, List<Ingredient> ingredients) {
        this.name = Objects.requireNonNull(name);
        this.numberOfPortions = Objects.requireNonNull(numberOfPortions);
        this.ingredients = new ArrayList<>(ingredients);
    }

    public String getName() {
        return name;
    }

    public int getNumberOfPortions() {
        return numberOfPortions;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }
}
