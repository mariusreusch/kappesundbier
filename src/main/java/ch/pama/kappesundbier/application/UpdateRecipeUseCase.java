package ch.pama.kappesundbier.application;

import ch.pama.kappesundbier.domain.*;
import ch.pama.kappesundbier.interfaces.dto.IngredientDto;
import ch.pama.kappesundbier.interfaces.dto.InstructionStepDto;
import ch.pama.kappesundbier.interfaces.dto.RecipeDto;
import ch.pama.kappesundbier.interfaces.dto.RecipeImageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

import static java.util.stream.Collectors.toSet;

@Service
@RequiredArgsConstructor
public class UpdateRecipeUseCase {

    private final RecipeRepository recipeRepository;

    @Transactional
    public RecipeDto invoke(RecipeDto recipeDto, List<RecipeImageDto> recipeImageData, User user) {

        Recipe recipe = recipeRepository.findById(Long.valueOf(recipeDto.getId())).orElseThrow(IllegalStateException::new);

        assertRecipeBelongsToUser(user, recipe);

        Set<Ingredient> ingredients = recipeDto.getIngredients().stream().map(IngredientDto::toIngredient).collect(toSet());
        Set<RecipeCategory> categories = recipeDto.getCategories().stream().map(RecipeCategory::new).collect(toSet());
        Set<RecipeImage> recipeImages = recipeImageData.stream().map(image -> new RecipeImage(image.getFileName(), image.getImageData(), image.getContentType()))
                .collect(toSet());
        Set<InstructionStep> instructionSteps = recipeDto.getInstructionSteps().stream().map(InstructionStepDto::toInstructionStep).collect(toSet());

        recipe.setName(recipeDto.getName());
        recipe.setCategories(categories);
        recipe.setIngredients(ingredients);
        recipe.setInstructionSteps(instructionSteps);
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

}
