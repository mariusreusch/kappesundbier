package ch.pama.kappesundbier.application;

import ch.pama.kappesundbier.infrastructure.db.RecipeDbEntity;
import ch.pama.kappesundbier.infrastructure.db.RecipeRepository;
import ch.pama.kappesundbier.infrastructure.db.UserDbEntity;
import ch.pama.kappesundbier.interfaces.dto.RecipeDto;
import ch.pama.kappesundbier.interfaces.dto.RecipeImageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

import static java.util.stream.Collectors.toList;

@Service
@Transactional
@RequiredArgsConstructor
public class RecipeService {

    private final RecipeRepository recipeRepository;


    public List<RecipeDto> findAllRecipesOfUser(UserDbEntity user) {
        return user.getRecipes()
                .stream()
                .map(RecipeDto::from).collect(toList());
    }

    public List<RecipeImageDto> findImagesOfRecipe(Long id, UserDbEntity user) {
        return user.getRecipes().stream()
                .filter(recipe -> Objects.equals(recipe.getId(), id))
                .map(RecipeDbEntity::getRecipeImages)
                .flatMap(Collection::stream)
                .map(image -> new RecipeImageDto(image.getFileName(), image.getData(),
                        image.getContentType()))
                .collect(toList());
    }

}
