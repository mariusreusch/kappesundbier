package ch.pama.cookncode.rest;

import ch.pama.cookncode.domain.User;
import ch.pama.cookncode.domain.UserRepository;
import ch.pama.cookncode.rest.dto.DeletedRecipeIdDto;
import ch.pama.cookncode.rest.dto.RecipeDto;
import ch.pama.cookncode.service.RecipeService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import static org.apache.tomcat.util.http.fileupload.FileUploadBase.MULTIPART_FORM_DATA;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("api/recipes")
public class RecipeRestController {

    private final RecipeService recipeService;
    private final UserRepository userRepository;
    private final ObjectMapper objectMapper;

    public RecipeRestController(RecipeService recipeService, UserRepository userRepository, ObjectMapper objectMapper) {
        this.recipeService = recipeService;
        this.userRepository = userRepository;
        this.objectMapper = objectMapper;
    }

    @PostMapping
    public RecipeDto create(
            @RequestParam("recipe") String recipeJSON,
            @RequestParam("file") MultipartFile[] multipartFiles, Principal principal) throws IOException {
        User user = getOrCreateUser(principal);

        RecipeDto recipeDto = objectMapper.readValue(recipeJSON, RecipeDto.class);

        return recipeService.createRecipe(recipeDto, from(multipartFiles), user);
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

    @GetMapping("/{id}/images")
    public ResponseEntity<List<byte[]>> findImagesByRecipeId(@PathVariable Long id, Principal principal) {
        User user = getOrCreateUser(principal);
        List<byte[]> imagesOfRecipe = recipeService.findImagesOfRecipe(id, user);

        HttpHeaders headers = new HttpHeaders();

        headers.setCacheControl(CacheControl.noCache().getHeaderValue());

        return new ResponseEntity<>(imagesOfRecipe, headers, OK);
    }

    @PutMapping(value = "/{id}", consumes = MULTIPART_FORM_DATA)
    public RecipeDto update(
            @PathVariable Long id,
            @RequestParam("recipe") String recipeJSON,
            @RequestParam(value = "file", required = false) MultipartFile[] multipartFiles, Principal principal) throws IOException {
        User user = getOrCreateUser(principal);

        RecipeDto recipeDto = objectMapper.readValue(recipeJSON, RecipeDto.class);

        assertBodyAndPathIdAreEqual(id, recipeDto);

        return recipeService.updateRecipe(recipeDto, from(multipartFiles), user);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(OK)
    public DeletedRecipeIdDto deleteById(@PathVariable Long id, Principal principal) {
        User user = getOrCreateUser(principal);

        recipeService.deleteRecipe(id, user);

        return new DeletedRecipeIdDto(id.toString());
    }

    private User getOrCreateUser(Principal principal) {
        String userId = principal.getName();
        Optional<User> byProviderId = userRepository.findByProviderId(userId);
        return byProviderId
                .orElseGet(() -> userRepository.save(new User(userId)));
    }

    private List<byte[]> from(MultipartFile[] multipartFiles) throws IOException {
        List<byte[]> recipeImageData = new ArrayList<>();
        for (MultipartFile multipartFile : multipartFiles) {
            recipeImageData.add(multipartFile.getBytes());
        }
        return recipeImageData;
    }

    private void assertBodyAndPathIdAreEqual(@PathVariable Long id, RecipeDto recipeDto) {
        if (!Objects.equals(id, Long.valueOf(recipeDto.getId()))) {
            throw new IllegalStateException("The id in the path doesn't match the id in the body.");
        }
    }
}
