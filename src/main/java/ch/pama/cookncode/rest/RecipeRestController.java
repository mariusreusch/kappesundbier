package ch.pama.cookncode.rest;

import ch.pama.cookncode.domain.User;
import ch.pama.cookncode.domain.UserRepository;
import ch.pama.cookncode.rest.dto.RecipeDto;
import ch.pama.cookncode.service.RecipeService;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/recipes")
public class RecipeRestController {

    private final RecipeService recipeService;
    private final UserRepository userRepository;

    public RecipeRestController(RecipeService recipeService, UserRepository userRepository) {
        this.recipeService = recipeService;
        this.userRepository = userRepository;
    }

    @PostMapping
    public RecipeDto createRecipe(@RequestBody RecipeDto recipeDto, Principal principal) {
        User user = getOrCreateUser(principal);
        return recipeService.createRecipe(recipeDto, user);
    }

    @GetMapping
    public List<RecipeDto> findAll(Principal principal) {
        User user = getOrCreateUser(principal);
        return recipeService.findAllRecipesOfUser(user);
    }

    @GetMapping("/{id}")
    public RecipeDto findById(@PathVariable String id, Principal principal) {
        return findAll(principal).stream()
                .filter(recipeDto -> recipeDto.getId().equals(id))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }

    private User getOrCreateUser(Principal principal) {
        String userId = principal.getName();
        Optional<User> byProviderId = userRepository.findByProviderId(userId);
        return byProviderId
                .orElseGet(() -> userRepository.save(new User(userId)));
    }
}
