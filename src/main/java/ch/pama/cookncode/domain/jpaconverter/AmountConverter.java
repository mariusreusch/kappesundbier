package ch.pama.cookncode.domain.jpaconverter;

import ch.pama.cookncode.domain.Amount;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class AmountConverter implements AttributeConverter<Amount, Integer> {

    @Override
    public Integer convertToDatabaseColumn(Amount amount) {
        return (amount == null ? null : amount.getValue());
    }

    @Override
    public Amount convertToEntityAttribute(Integer amount) {
        return amount == null ? null : new Amount(amount);
    }
}
