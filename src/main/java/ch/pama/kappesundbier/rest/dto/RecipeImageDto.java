package ch.pama.kappesundbier.rest.dto;

import ch.pama.kappesundbier.util.OnlyForFramework;

public class RecipeImageDto {

  private String fileName;
  private byte[] imageData;
  private String contentType;

  @OnlyForFramework
  private RecipeImageDto() {
  }

  public RecipeImageDto(String fileName, byte[] imageData, String contentType) {
    this.imageData = imageData;
    this.fileName = fileName;
    this.contentType = contentType;
  }

  public byte[] getImageData() {
    return imageData;
  }

  public String getFileName() {
    return fileName;
  }

  public String getContentType() {
    return contentType;
  }
}
