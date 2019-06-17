package ch.pama.kappesundbier.domain;

import ch.pama.kappesundbier.util.OnlyForFramework;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
public class RecipeImage {

  @OnlyForFramework
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Lob
  @Column
  @Type(type = "org.hibernate.type.BinaryType")
  private byte[] data;
  private String fileName;
  private String contentType;

  @OnlyForFramework
  private RecipeImage() {
  }

  public RecipeImage(String fileName, byte[] data, String contentType) {
    this.data = data;
    this.fileName = fileName;
    this.contentType = contentType;
  }

  public byte[] getData() {
    return data;
  }

  public String getFileName() {
    return fileName;
  }

  public String getContentType() {
    return contentType;
  }
}
