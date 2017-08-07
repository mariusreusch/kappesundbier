package ch.pama.cookncode.domain;

import ch.pama.cookncode.util.OnlyForFramework;

import javax.persistence.*;

@Entity
public class RecipeImage {

    @GeneratedValue
    @Id
    private Long id;

    @Lob
    @Column
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
