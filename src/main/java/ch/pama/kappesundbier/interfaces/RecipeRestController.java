package ch.pama.kappesundbier.interfaces;

import ch.pama.kappesundbier.application.*;
import ch.pama.kappesundbier.domain.RecipeIdentifier;
import ch.pama.kappesundbier.infrastructure.db.RecipeDbEntity;
import ch.pama.kappesundbier.infrastructure.db.UserDbEntity;
import ch.pama.kappesundbier.infrastructure.db.UserRepository;
import ch.pama.kappesundbier.interfaces.dto.RecipeDto;
import ch.pama.kappesundbier.interfaces.dto.RecipeImageDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.Principal;
import java.util.*;

import static java.util.Collections.emptyList;
import static org.apache.tomcat.util.http.fileupload.FileUploadBase.MULTIPART_FORM_DATA;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("api/recipes")
@RequiredArgsConstructor
public class RecipeRestController {

    private final UserRepository userRepository;
    private final ObjectMapper objectMapper;
    private final DeleteRecipeUseCase deleteRecipeUseCase;
    private final UpdateRecipeUseCase updateRecipeUseCase;
    private final FindAllRecipesOfUserUseCase findAllRecipesOfUserUseCase;
    private final CreateRecipeUseCase createRecipeUseCase;


    @PostMapping
    public RecipeDto create(
            @RequestParam("recipe") String recipeJSON,
            @RequestParam("file") Optional<MultipartFile[]> multipartFiles,
            Principal principal)
            throws IOException {
        UserDbEntity user = getOrCreateUser(principal);

        RecipeDto recipeDto = objectMapper.readValue(recipeJSON, RecipeDto.class);

        return createRecipeUseCase.invoke(recipeDto, multipartFiles.map(this::from).orElse(emptyList()), user);
    }

    @GetMapping
    public List<RecipeDto> findRecipes(@RequestParam(required = false) String category,
                                       Principal principal) {
        UserDbEntity user = getOrCreateUser(principal);

        return findAllRecipesOfUserUseCase.invoke(user, category);
    }

    @GetMapping("/{id}")
    public RecipeDto findById(@PathVariable String id, Principal principal) {
        return findAll(principal).stream()
                .filter(recipe -> recipe.getId().equals(id))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }

    @GetMapping("/{id}/images")
    public ResponseEntity<List<RecipeImageDto>> findImagesByRecipeId(@PathVariable Long id,
                                                                     Principal principal) {
        UserDbEntity user = getOrCreateUser(principal);
        List<RecipeImageDto> imagesOfRecipe = findImagesOfRecipe(id, user);

        HttpHeaders headers = new HttpHeaders();

        headers.setCacheControl(CacheControl.noCache().getHeaderValue());

        return new ResponseEntity<>(imagesOfRecipe, headers, OK);
    }

    @PutMapping(value = "/{id}", consumes = MULTIPART_FORM_DATA)
    public RecipeDto update(
            @PathVariable Long id,
            @RequestParam("recipe") String recipeJSON,
            @RequestParam("file") Optional<MultipartFile[]> multipartFiles,
            Principal principal) throws IOException {
        UserDbEntity user = getOrCreateUser(principal);

        RecipeDto recipeDto = objectMapper.readValue(recipeJSON, RecipeDto.class);

        assertBodyAndPathIdAreEqual(id, recipeDto);

        return updateRecipeUseCase.invoke(recipeDto, multipartFiles.map(this::from).orElse(emptyList()), user);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(OK)
    public RecipeIdentifier deleteById(@PathVariable RecipeIdentifier id, Principal principal) {
        UserDbEntity user = getOrCreateUser(principal);

        deleteRecipeUseCase.invoke(id, user);

        return id;
    }

    private List<RecipeDto> findAll(Principal principal) {
        UserDbEntity user = getOrCreateUser(principal);
        return user.getRecipes()
                .stream()
                .map(RecipeDto::from)
                .toList();
    }

    private List<RecipeImageDto> findImagesOfRecipe(Long id, UserDbEntity user) {
        return user.getRecipes().stream()
                .filter(recipe -> Objects.equals(recipe.getId(), id))
                .map(RecipeDbEntity::getRecipeImages)
                .flatMap(Collection::stream)
                .map(image -> new RecipeImageDto(image.getFileName(), image.getData(), image.getContentType()))
                .toList();
    }

    private UserDbEntity getOrCreateUser(Principal principal) {
        String userId = principal.getName();
            Optional<UserDbEntity> byProviderId = userRepository.findByProviderId(userId);
        return byProviderId
                .orElseGet(() -> userRepository.save(new UserDbEntity(userId)));
    }

    private List<RecipeImageDto> from(MultipartFile[] multipartFiles) {
        List<RecipeImageDto> recipeImageData = new ArrayList<>();
        for (MultipartFile multipartFile : multipartFiles) {
            try {
                recipeImageData.add(
                        new RecipeImageDto(multipartFile.getOriginalFilename(), multipartFile.getBytes(),
                                multipartFile.getContentType()));
            } catch (IOException e) {
                throw new IllegalStateException();
            }
        }
        return recipeImageData;
    }

    private void assertBodyAndPathIdAreEqual(@PathVariable Long id, RecipeDto recipeDto) {
        if (!Objects.equals(id, Long.valueOf(recipeDto.getId()))) {
            throw new IllegalStateException("The id in the path doesn't match the id in the body.");
        }
    }
}
