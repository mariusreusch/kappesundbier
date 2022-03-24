package ch.pama.kappesundbier.application;

import ch.pama.kappesundbier.domain.*;
import ch.pama.kappesundbier.interfaces.dto.RecipeDto;
import ch.pama.kappesundbier.interfaces.dto.RecipeImageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CreateRecipeUseCase {

    private final RecipeRepository recipeRepository;

    @Transactional
    public RecipeDto invoke(RecipeDto recipeDto, List<RecipeImageDto> recipeImageData,
                            User user) {
        Recipe recipe = recipeDto.toRecipeWithImages(recipeImageData);

        user.addRecipe(recipe);

        Recipe newRecipe = recipeRepository.save(recipe);

        return RecipeDto.from(newRecipe);
    }
}
