package ch.pama.cookncode.boundary;

import ch.pama.cookncode.domain.RecipeRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("recipe")
public class RecipeRestController {

    private RecipeRepository recipeRepository;

    public RecipeRestController(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @GetMapping("/{id}")
    public String getRecipe(@PathVariable Long id) {
        return recipeRepository.findOne(id).getName();
    }

    @GetMapping("/random")
    public String getRecipe() {
        return "This is a random recipe.";
    }
}
