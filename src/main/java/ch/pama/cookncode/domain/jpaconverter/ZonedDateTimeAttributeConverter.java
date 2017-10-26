package ch.pama.cookncode.domain.jpaconverter;

import ch.pama.cookncode.util.OnlyForFramework;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.sql.Timestamp;
import java.time.ZoneId;
import java.time.ZonedDateTime;

@OnlyForFramework
@Converter(autoApply = true)
public class ZonedDateTimeAttributeConverter implements AttributeConverter<ZonedDateTime, Timestamp> {

    @Override
    public Timestamp convertToDatabaseColumn(ZonedDateTime zonedDateTime) {
        return (zonedDateTime == null ? null : new Timestamp(zonedDateTime.toInstant().toEpochMilli()));
    }

    @Override
    public ZonedDateTime convertToEntityAttribute(Timestamp timestamp) {
        return (timestamp == null ? null : ZonedDateTime.of(timestamp.toLocalDateTime(), ZoneId.systemDefault()));
    }
}
