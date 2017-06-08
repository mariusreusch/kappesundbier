package ch.pama.cookncode.service;

import ch.pama.cookncode.domain.Recipe;
import ch.pama.cookncode.domain.RecipeRepository;
import ch.pama.cookncode.domain.User;
import ch.pama.cookncode.domain.UserRepository;
import ch.pama.cookncode.rest.dto.RecipeDto;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;
    private final UserRepository userRepository;

    public RecipeService(RecipeRepository recipeRepository, UserRepository userRepository) {
        this.recipeRepository = recipeRepository;
        this.userRepository = userRepository;
    }

    public RecipeDto createRecipe(RecipeDto recipeDto, User user) {
        user.addRecipe(recipeDto.toRecipe());
        userRepository.save(user);
        return recipeDto;
    }

    public List<RecipeDto> findAllRecipesOfUser(User user) {

        return user.getRecipes()
                .stream()
                .map(RecipeDto::from).collect(toList());
    }
}
