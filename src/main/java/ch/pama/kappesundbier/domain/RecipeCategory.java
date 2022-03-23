package ch.pama.kappesundbier.domain;

import ch.pama.kappesundbier.util.OnlyForFramework;
import org.springframework.util.StringUtils;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class RecipeCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private final String name;

    public RecipeCategory(String name) {
        this.name = requireNotEmpty(name);
    }

    private String requireNotEmpty(String name) {
        if (StringUtils.isEmpty(name)) {
            throw new IllegalArgumentException("Category name must not be empty.");
        }
        return name;
    }

    @OnlyForFramework
    private RecipeCategory() {
        this.name = "";
    }

    public String getName() {
        return name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        RecipeCategory that = (RecipeCategory) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(name, that.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }
}
