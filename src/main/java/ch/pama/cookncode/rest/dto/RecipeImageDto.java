package ch.pama.cookncode.rest.dto;

public class RecipeImageDto {

    private final byte[] content;
    private final String fileName;

    public RecipeImageDto(byte[] content, String fileName) {
        this.content = content;
        this.fileName = fileName;
    }

    public byte[] getContent() {
        return content;
    }

    public String getFileName() {
        return fileName;
    }
}
