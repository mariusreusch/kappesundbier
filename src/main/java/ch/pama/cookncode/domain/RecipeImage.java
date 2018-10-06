package ch.pama.cookncode.domain;

import ch.pama.cookncode.util.OnlyForFramework;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
public class RecipeImage {

    @OnlyForFramework
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    @Lob
    @Column
    @Type(type="org.hibernate.type.BinaryType")
    private byte[] data;
    private String fileName;


    @OnlyForFramework
    private RecipeImage() {
    }

    public RecipeImage(String fileName, byte[] data) {
        this.data = data;
        this.fileName = fileName;
    }

    public byte[] getData() {
        return data;
    }
}
