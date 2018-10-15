package ch.pama.cookncode.domain;

import ch.pama.cookncode.util.OnlyForFramework;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Ingredient {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  private Amount amount;
  private String unitOfMeasurement;

  @OnlyForFramework
  private Ingredient() {
  }

  public Ingredient(String name, Amount amount, String unitOfMeasurement) {
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
