package ch.pama.cookncode.rest;

import ch.pama.cookncode.rest.dto.RecipeDto;
import ch.pama.cookncode.service.RecipeService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/recipes")
public class RecipeRestController {

    private final RecipeService recipeService;

    public RecipeRestController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @PostMapping
    public RecipeDto createRecipe(@RequestBody RecipeDto recipeDto) {
        return recipeService.createRecipe(recipeDto);
    }

    @GetMapping("/random")
    public String getRecipe() {
        return "This is a random recipe.";
    }
}
