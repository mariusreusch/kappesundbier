package ch.pama.kappesundbier.application;

import ch.pama.kappesundbier.infrastructure.db.RecipeDbEntity;
import ch.pama.kappesundbier.infrastructure.db.RecipeRepository;
import ch.pama.kappesundbier.infrastructure.db.UserDbEntity;
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
                            UserDbEntity user) {
        RecipeDbEntity recipe = recipeDto.toRecipeWithImages(recipeImageData);

        user.addRecipe(recipe);

        RecipeDbEntity newRecipe = recipeRepository.save(recipe);

        return RecipeDto.from(newRecipe);
    }
}
