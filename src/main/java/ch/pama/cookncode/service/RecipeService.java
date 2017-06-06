package ch.pama.cookncode.service;

import ch.pama.cookncode.domain.Recipe;
import ch.pama.cookncode.domain.RecipeRepository;
import ch.pama.cookncode.rest.dto.RecipeDto;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;

    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public RecipeDto createRecipe(RecipeDto recipeDto) {
        Recipe newRecipe = recipeRepository.save(recipeDto.toRecipe());
        return RecipeDto.from(newRecipe);
    }

    public List<RecipeDto> findAllRecipesOfUser() {
        return recipeRepository.findAll().stream().map(RecipeDto::from).collect(toList());
    }
}
