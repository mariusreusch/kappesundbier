package ch.pama.kappesundbier.rest.dto;

import ch.pama.kappesundbier.util.OnlyForFramework;

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
