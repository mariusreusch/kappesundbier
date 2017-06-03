package ch.pama.cookncode.rest;

public class IngredientDto {

    private String name;
    private String amount;
    private String unitOfMeasurement;

    public IngredientDto() {
    }

    public IngredientDto(String name, String unitOfMeasurement) {
        this.unitOfMeasurement = unitOfMeasurement;
        this.name = name;
    }

    public IngredientDto(String name, String amount, String unitOfMeasurement) {
        this.name = name;
        this.amount = amount;
        this.unitOfMeasurement = unitOfMeasurement;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getUnitOfMeasurement() {
        return unitOfMeasurement;
    }

    public void setUnitOfMeasurement(String unitOfMeasurement) {
        this.unitOfMeasurement = unitOfMeasurement;
    }
}
