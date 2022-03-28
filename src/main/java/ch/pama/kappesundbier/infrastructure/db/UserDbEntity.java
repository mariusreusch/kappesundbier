package ch.pama.kappesundbier.infrastructure.db;

import ch.pama.kappesundbier.shared.util.OnlyForFramework;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "kub_user")
public class UserDbEntity {

    @OnlyForFramework
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;
    @OnlyForFramework
    private String providerId;
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "kub_user_recipes",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "recipes_id"))
    private List<RecipeDbEntity> recipes;

    @OnlyForFramework
    private UserDbEntity() {
    }

    public UserDbEntity(String providerId) {
        this.providerId = Objects.requireNonNull(providerId);
        this.recipes = new ArrayList<>();
    }

    public void addRecipe(RecipeDbEntity recipe) {
        this.recipes.add(recipe);
    }

    public List<RecipeDbEntity> getRecipes() {
        return recipes;
    }

    public boolean isOwnerOf(RecipeDbEntity recipe) {
        return getRecipes().stream().map(RecipeDbEntity::getId).anyMatch(recipe.getId()::equals);
    }
}
