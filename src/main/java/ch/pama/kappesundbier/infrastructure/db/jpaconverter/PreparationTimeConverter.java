package ch.pama.kappesundbier.infrastructure.db.jpaconverter;

import ch.pama.kappesundbier.domain.PreparationTime;
import ch.pama.kappesundbier.shared.util.OnlyForFramework;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.math.BigDecimal;

@OnlyForFramework
@Converter(autoApply = true)
public class PreparationTimeConverter implements AttributeConverter<PreparationTime, BigDecimal> {

    @Override
    public BigDecimal convertToDatabaseColumn(PreparationTime preparationTime) {
        return (preparationTime == null ? null : preparationTime.minutes());
    }

    @Override
    public PreparationTime convertToEntityAttribute(BigDecimal minutes) {
        return minutes == null ? null : new PreparationTime(minutes);
    }
}
