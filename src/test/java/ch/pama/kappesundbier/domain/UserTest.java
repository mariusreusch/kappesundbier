package ch.pama.kappesundbier.domain;


import ch.pama.kappesundbier.infrastructure.db.RecipeDbEntity;
import ch.pama.kappesundbier.infrastructure.db.UserDbEntity;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.mock;

class UserTest {

    @Test
    void isOwnerOf_recipeOfUser_true() {
        UserDbEntity user = new UserDbEntity("test-id-1");
        user.addRecipe(createRecipeMockWithId(1L));

        boolean isOwner = user.isOwnerOf(createRecipeMockWithId(1L));

        assertThat(isOwner).isTrue();
    }

    @Test
    void isOwnerOf_recipeFromOtherUser_false() {
        UserDbEntity user = new UserDbEntity("test-id-2");
        user.addRecipe(createRecipeMockWithId(2L));

        boolean isOwner = user.isOwnerOf(createRecipeMockWithId(3L));

        assertThat(isOwner).isFalse();
    }

    private RecipeDbEntity createRecipeMockWithId(Long id) {
        RecipeDbEntity recipeMock = mock(RecipeDbEntity.class);
        doReturn(id).when(recipeMock).getId();
        return recipeMock;
    }
}