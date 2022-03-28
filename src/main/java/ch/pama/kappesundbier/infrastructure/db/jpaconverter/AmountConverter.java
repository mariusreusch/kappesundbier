package ch.pama.kappesundbier.infrastructure.db.jpaconverter;

import ch.pama.kappesundbier.domain.Amount;
import ch.pama.kappesundbier.shared.util.OnlyForFramework;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.math.BigDecimal;

@OnlyForFramework
@Converter(autoApply = true)
public class AmountConverter implements AttributeConverter<Amount, BigDecimal> {

    @Override
    public BigDecimal convertToDatabaseColumn(Amount amount) {
        return (amount == null ? null : amount.value());
    }

    @Override
    public Amount convertToEntityAttribute(BigDecimal amount) {
        return amount == null ? null : new Amount(amount);
    }
}
