package ch.pama.kappesundbier.infrastructure.db;

import ch.pama.kappesundbier.shared.util.OnlyForFramework;
import org.springframework.util.StringUtils;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "recipe_category")
public class RecipeCategoryDbEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private final String name;

    public RecipeCategoryDbEntity(String name) {
        this.name = requireNotEmpty(name);
    }

    private String requireNotEmpty(String name) {
        if (StringUtils.isEmpty(name)) {
            throw new IllegalArgumentException("Category name must not be empty.");
        }
        return name;
    }

    @OnlyForFramework
    private RecipeCategoryDbEntity() {
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
        RecipeCategoryDbEntity that = (RecipeCategoryDbEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(name, that.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }
}
