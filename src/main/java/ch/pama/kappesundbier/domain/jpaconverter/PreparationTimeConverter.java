package ch.pama.kappesundbier.domain.jpaconverter;

import ch.pama.kappesundbier.domain.PreparationTime;
import ch.pama.kappesundbier.util.OnlyForFramework;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.math.BigDecimal;

@OnlyForFramework
@Converter(autoApply = true)
public class PreparationTimeConverter implements AttributeConverter<PreparationTime, BigDecimal> {

  @Override
  public BigDecimal convertToDatabaseColumn(PreparationTime preparationTime) {
    return (preparationTime == null ? null : preparationTime.getValue());
  }

  @Override
  public PreparationTime convertToEntityAttribute(BigDecimal minutes) {
    return minutes == null ? null : new PreparationTime(minutes);
  }
}
