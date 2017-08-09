package ch.pama.cookncode.service;

import ch.pama.cookncode.domain.*;
import ch.pama.cookncode.rest.dto.RecipeDto;
import ch.pama.cookncode.rest.dto.RecipeImageDto;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Comparator;
import java.util.List;

import static java.util.Comparator.comparing;
import static java.util.stream.Collectors.toList;

@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;
    private final UserRepository userRepository;

    public RecipeService(RecipeRepository recipeRepository, UserRepository userRepository) {
        this.recipeRepository = recipeRepository;
        this.userRepository = userRepository;
    }

    public RecipeDto createRecipe(RecipeDto recipeDto, User user, List<byte[]> recipeImageData) {
        Recipe recipe = recipeDto.toRecipe();
        recipeImageData.stream()
                .map(RecipeImage::new)
                .forEach(recipe::addImage);

        user.addRecipe(recipe);
        User save = userRepository.save(user);

        Recipe newRecipe = save.getRecipes().stream()
                .max(comparing(Recipe::getCreationDate))
                .orElseThrow(IllegalStateException::new);

        return recipeDto.from(newRecipe);
    }

    public List<RecipeDto> findAllRecipesOfUser(User user) {

        return user.getRecipes()
                .stream()
                .map(RecipeDto::from).collect(toList());
    }

    public RecipeDto findById(String id) {
        return RecipeDto.from(this.recipeRepository.findOne(Long.valueOf(id)));
    }

    public List<byte[]> findImagesOfRecipe(Long id, User user) {
        return user.getRecipes().stream()
                .filter(recipe -> recipe.getId() == id)
                .map(Recipe::getRecipeImages)
                .flatMap(Collection::stream)
                .map(RecipeImage::getData)
                .collect(toList());
    }

}
