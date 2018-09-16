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

    @OnlyForFramework
    private RecipeImage() {
    }

    public RecipeImage(byte[] data) {
        this.data = data;
    }

    public byte[] getData() {
        return data;
    }
}
