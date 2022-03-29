package ch.pama.kappesundbier.application;

import ch.pama.kappesundbier.infrastructure.db.UserDbEntity;
import ch.pama.kappesundbier.interfaces.dto.RecipeDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FindAllRecipesOfUserUseCase {

    @Transactional
    public List<RecipeDto> invoke(UserDbEntity user, String category) {
        return user.getRecipes().stream()
                .map(RecipeDto::from)
                .filter(recipeDto -> !StringUtils.hasText(category) || (StringUtils.hasText(category) && recipeDto.getCategories().contains(category)))
                .toList();
    }
}
