package ch.pama.kappesundbier.domain;

public record RecipeImage(String fileName,
                          byte[] imageData,
                          String contentType) {
}
