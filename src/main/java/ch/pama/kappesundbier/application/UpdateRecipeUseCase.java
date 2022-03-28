package ch.pama.kappesundbier.application;

import ch.pama.kappesundbier.infrastructure.db.*;
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
    public RecipeDto invoke(RecipeDto recipeDto, List<RecipeImageDto> recipeImageData, UserDbEntity user) {

        RecipeDbEntity recipe = recipeRepository.findById(Long.valueOf(recipeDto.getId())).orElseThrow(IllegalStateException::new);

        assertRecipeBelongsToUser(user, recipe);

        Set<IngredientDbEntity> ingredients = recipeDto.getIngredients().stream().map(IngredientDto::toIngredient).collect(toSet());
        Set<RecipeCategoryDbEntity> categories = recipeDto.getCategories().stream().map(RecipeCategoryDbEntity::new).collect(toSet());
        Set<RecipeImageDbEntity> recipeImages = recipeImageData.stream().map(image -> new RecipeImageDbEntity(image.getFileName(), image.getImageData(), image.getContentType()))
                .collect(toSet());
        Set<InstructionStepDbEntity> instructionSteps = recipeDto.getInstructionSteps().stream().map(InstructionStepDto::toInstructionStep).collect(toSet());

        recipe.setName(recipeDto.getName());
        recipe.setCategories(categories);
        recipe.setIngredients(ingredients);
        recipe.setInstructionSteps(instructionSteps);
        recipe.setNumberOfPortions(recipeDto.getNumberOfPortions());
        recipe.setRecipeImages(recipeImages);
        recipe.setPreparationTime(recipeDto.getPreparationTime());

        RecipeDbEntity updatedRecipe = recipeRepository.save(recipe);

        return RecipeDto.from(updatedRecipe);
    }

    private void assertRecipeBelongsToUser(UserDbEntity user, RecipeDbEntity recipe) {
        if (!user.isOwnerOf(recipe)) {
            throw new IllegalArgumentException("Logged in user is not owner of edited recipe.");
        }
    }

}
