package ch.pama.cookncode.rest.dto;

import ch.pama.cookncode.util.OnlyForFramework;

public class DeletedRecipeIdDto {

    private String deletedRecipeId;

    public DeletedRecipeIdDto(String deletedRecipeId) {
        this.deletedRecipeId = deletedRecipeId;
    }

    @OnlyForFramework
    private DeletedRecipeIdDto() {
    }

    @OnlyForFramework
    public String getDeletedRecipeId() {
        return deletedRecipeId;
    }
}
