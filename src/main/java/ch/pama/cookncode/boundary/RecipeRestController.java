package ch.pama.cookncode.boundary;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("recipe")
public class RecipeRestController {

    @GetMapping("/random")
    public String getRecipe() {
        return "This is a random repository.";
    }
}
