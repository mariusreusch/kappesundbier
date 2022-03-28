package ch.pama.kappesundbier.infrastructure.db;

import ch.pama.kappesundbier.domain.Amount;
import ch.pama.kappesundbier.shared.util.OnlyForFramework;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "ingredient")
public class IngredientDbEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Amount amount;
    private String unitOfMeasurement;

    @OnlyForFramework
    private IngredientDbEntity() {
    }

    public IngredientDbEntity(String name, Amount amount, String unitOfMeasurement) {
        this.name = Objects.requireNonNull(name);
        this.amount = amount;
        this.unitOfMeasurement = Objects.requireNonNull(unitOfMeasurement);
    }

    public String getName() {
        return name;
    }

    public Amount getAmount() {
        return amount;
    }

    public String getUnitOfMeasurement() {
        return unitOfMeasurement;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        IngredientDbEntity that = (IngredientDbEntity) o;
        return amount == that.amount &&
                Objects.equals(id, that.id) &&
                Objects.equals(name, that.name) &&
                Objects.equals(unitOfMeasurement, that.unitOfMeasurement);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, amount, unitOfMeasurement);
    }
}
