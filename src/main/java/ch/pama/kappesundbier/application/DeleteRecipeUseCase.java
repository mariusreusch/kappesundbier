package ch.pama.kappesundbier.application;

import ch.pama.kappesundbier.domain.User;
import ch.pama.kappesundbier.domain.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class DeleteRecipeUseCase {

    private final UserRepository userRepository;

    @Transactional
    public void invoke(Long id, User user) {
        user.getRecipes().removeIf(recipe -> Objects.equals(recipe.getId(), id));
        userRepository.save(user);
    }
}
