package ch.pama.cookncode.rest;

import ch.pama.cookncode.domain.RecipeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("recipes")
public class RecipeRestController {

    private RecipeRepository recipeRepository;

    public RecipeRestController(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @PostMapping
    public RecipeDto createRecipe(RecipeDto recipeDto) {
        return recipeDto;
    }

    @GetMapping("/")
    public List<RecipeDto> findAll() {
        ArrayList<RecipeDto> recipeDtos = new ArrayList<>();

        RecipeDto recipeDto = new RecipeDto();
        recipeDto.setName("Spaghetti mit Tomatensosse");
        recipeDto.setNumberOfPortions(4);
        recipeDto.addIngredient(new IngredientDto("Spaghetti", "500", "gramm"));
        recipeDto.addIngredient(new IngredientDto("Tomatensosse", "200", "ml"));

        recipeDtos.add(recipeDto);

        return recipeDtos;
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
