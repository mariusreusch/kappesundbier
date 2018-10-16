package ch.pama.cookncode.service;

import ch.pama.cookncode.domain.*;
import ch.pama.cookncode.rest.dto.IngredientDto;
import ch.pama.cookncode.rest.dto.RecipeDto;
import ch.pama.cookncode.rest.dto.RecipeImageDto;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import static java.util.stream.Collectors.toList;
import static java.util.stream.Collectors.toSet;

@Service
public class RecipeService {

  private final RecipeRepository recipeRepository;
  private final UserRepository userRepository;

  public RecipeService(RecipeRepository recipeRepository, UserRepository userRepository) {
    this.recipeRepository = recipeRepository;
    this.userRepository = userRepository;
  }

  public RecipeDto createRecipe(RecipeDto recipeDto, List<RecipeImageDto> recipeImageData,
      User user) {
    Recipe recipe = recipeDto.toRecipeWithImages(recipeImageData);

    user.addRecipe(recipe);

    Recipe newRecipe = recipeRepository.save(recipe);

    return RecipeDto.from(newRecipe);
  }

  public List<RecipeDto> findAllRecipesOfUser(User user) {
    return user.getRecipes()
        .stream()
        .map(RecipeDto::from).collect(toList());
  }

  public List<RecipeImageDto> findImagesOfRecipe(Long id, User user) {
    return user.getRecipes().stream()
        .filter(recipe -> Objects.equals(recipe.getId(), id))
        .map(Recipe::getRecipeImages)
        .flatMap(Collection::stream)
        .map(image -> new RecipeImageDto(image.getFileName(), image.getData(),
            image.getContentType()))
        .collect(toList());
  }

  public RecipeDto updateRecipe(RecipeDto recipeDto, List<RecipeImageDto> recipeImageData, User user) {

    Recipe recipe = recipeRepository.findById(Long.valueOf(recipeDto.getId())).orElseThrow(IllegalStateException::new);

    assertRecipeBelongsToUser(user, recipe);

    Set<Ingredient> ingredients = recipeDto.getIngredients().stream().map(IngredientDto::toIngredient).collect(toSet());

    Set<RecipeCategory> categories = recipeDto.getCategories().stream().map(RecipeCategory::new).collect(toSet());

    Set<RecipeImage> recipeImages = recipeImageData.stream()
        .map(image -> new RecipeImage(image.getFileName(), image.getImageData(), image.getContentType()))
        .collect(toSet());

    recipe.setName(recipeDto.getName());
    recipe.setCategories(categories);
    recipe.setIngredients(ingredients);
    recipe.setInstruction(recipeDto.getInstruction());
    recipe.setNumberOfPortions(recipeDto.getNumberOfPortions());
    recipe.setRecipeImages(recipeImages);
    recipe.setPreparationTime(recipeDto.getPreparationTime());

    Recipe updatedRecipe = recipeRepository.save(recipe);

    return RecipeDto.from(updatedRecipe);
  }

  private void assertRecipeBelongsToUser(User user, Recipe recipe) {
    if (!user.isOwnerOf(recipe)) {
      throw new IllegalArgumentException("Logged in user is not owner of edited recipe.");
    }
  }

  public void deleteRecipe(Long id, User user) {
    user.getRecipes().removeIf(recipe -> Objects.equals(recipe.getId(), id));
    userRepository.save(user);
  }
}
