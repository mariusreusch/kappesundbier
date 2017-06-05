package ch.pama.cookncode.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Ingredient {

    @GeneratedValue
    @Id
    private Long id;

    private String name;
    private int amount;
    private String unitOfMeasurement;

    private Ingredient() {
    }

    public Ingredient(String name, int amount, String unitOfMeasurement) {
        this.name = Objects.requireNonNull(name);
        this.amount = Objects.requireNonNull(amount);
        this.unitOfMeasurement = Objects.requireNonNull(unitOfMeasurement);
    }

    public String getName() {
        return name;
    }

    public int getAmount() {
        return amount;
    }

    public String getUnitOfMeasurement() {
        return unitOfMeasurement;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Ingredient that = (Ingredient) o;
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
