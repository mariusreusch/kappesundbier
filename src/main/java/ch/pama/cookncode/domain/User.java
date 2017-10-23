package ch.pama.cookncode.domain;

import ch.pama.cookncode.util.OnlyForFramework;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class User {

    @OnlyForFramework
    @GeneratedValue
    @Id
    private Long id;
    private String providerId;
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Recipe> recipes;

    @OnlyForFramework
    private User() {
    }

    public User(String providerId) {
        this.providerId = Objects.requireNonNull(providerId);
        this.recipes = new ArrayList<>();
    }

    public void addRecipe(Recipe recipe) {
        this.recipes.add(recipe);
    }

    public List<Recipe> getRecipes() {
        return recipes;
    }
}
