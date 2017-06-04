package ch.pama.cookncode.rest.dto;

import ch.pama.cookncode.domain.Ingredient;

public class IngredientDto {

    private String name;
    private int amount;
    private String unitOfMeasurement;

    private IngredientDto() {
    }

    private IngredientDto(String name, int amount, String unitOfMeasurement) {
        this.name = name;
        this.amount = amount;
        this.unitOfMeasurement = unitOfMeasurement;
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

    Ingredient toIngredient(){
        return new Ingredient(name, amount, unitOfMeasurement);
    }

    static IngredientDto from(Ingredient ingredient) {
        return new IngredientDto(ingredient.getName(), ingredient.getAmount(), ingredient.getUnitOfMeasurement());
    }
}
