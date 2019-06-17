package ch.pama.kappesundbier.domain;

import ch.pama.kappesundbier.util.OnlyForFramework;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "KUB_USER")
public class User {

  @OnlyForFramework
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  private Long id;
  @OnlyForFramework
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

  public boolean isOwnerOf(Recipe recipe) {
    return getRecipes().stream().map(Recipe::getId).anyMatch(recipe.getId()::equals);
  }
}
