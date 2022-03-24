package ch.pama.kappesundbier.interfaces.dto;

import ch.pama.kappesundbier.domain.Amount;
import ch.pama.kappesundbier.domain.Ingredient;
import ch.pama.kappesundbier.shared.util.OnlyForFramework;

public class IngredientDto {

    private String name;
    private Amount amount;
    private String unitOfMeasurement;

    @OnlyForFramework
    private IngredientDto() {
    }

    private IngredientDto(String name, Amount amount, String unitOfMeasurement) {
        this.name = name;
        this.amount = amount;
        this.unitOfMeasurement = unitOfMeasurement;
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

    public Ingredient toIngredient() {
        return new Ingredient(name, amount, unitOfMeasurement);
    }

    static IngredientDto from(Ingredient ingredient) {
        return new IngredientDto(ingredient.getName(), ingredient.getAmount(),
                ingredient.getUnitOfMeasurement());
    }
}
