package ch.pama.kappesundbier.application;

import ch.pama.kappesundbier.domain.*;
import ch.pama.kappesundbier.interfaces.dto.IngredientDto;
import ch.pama.kappesundbier.interfaces.dto.InstructionStepDto;
import ch.pama.kappesundbier.interfaces.dto.RecipeDto;
import ch.pama.kappesundbier.interfaces.dto.RecipeImageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import static java.util.stream.Collectors.toList;
import static java.util.stream.Collectors.toSet;

@Service
@Transactional
@RequiredArgsConstructor
public class RecipeService {

    private final RecipeRepository recipeRepository;


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

}
