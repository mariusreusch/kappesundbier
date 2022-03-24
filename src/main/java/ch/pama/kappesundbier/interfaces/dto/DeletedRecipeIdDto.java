package ch.pama.kappesundbier.interfaces.dto;

import ch.pama.kappesundbier.shared.util.OnlyForFramework;

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
