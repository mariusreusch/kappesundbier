package ch.pama.kappesundbier.application;

import ch.pama.kappesundbier.domain.RecipeIdentifier;
import ch.pama.kappesundbier.infrastructure.db.UserDbEntity;
import ch.pama.kappesundbier.infrastructure.db.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class DeleteRecipeUseCase {

    private final UserRepository userRepository;

    @Transactional
    public void invoke(RecipeIdentifier id, UserDbEntity user) {
        user.getRecipes().removeIf(recipe -> Objects.equals(recipe.getId(), Long.valueOf(id.value())));
        userRepository.save(user);
    }
}
