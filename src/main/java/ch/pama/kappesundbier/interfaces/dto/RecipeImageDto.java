package ch.pama.kappesundbier.interfaces.dto;

public class RecipeImageDto {

    private final String fileName;
    private final byte[] imageData;
    private final String contentType;

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
