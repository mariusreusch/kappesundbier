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

}
