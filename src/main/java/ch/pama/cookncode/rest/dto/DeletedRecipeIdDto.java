package ch.pama.cookncode.rest.dto;

import ch.pama.cookncode.util.OnlyForFramework;

public class DeletedRecipeIdDto {

    private long deletedRecipeId;

    public DeletedRecipeIdDto(long deletedRecipeId) {
        this.deletedRecipeId = deletedRecipeId;
    }

    @OnlyForFramework
    private DeletedRecipeIdDto() {
    }

    public long getDeletedRecipeId() {
        return deletedRecipeId;
    }
}
