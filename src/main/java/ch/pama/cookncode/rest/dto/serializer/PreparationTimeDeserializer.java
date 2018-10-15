package ch.pama.cookncode.rest.dto.serializer;

import ch.pama.cookncode.domain.PreparationTime;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import org.springframework.boot.jackson.JsonComponent;

import java.io.IOException;
import java.math.BigDecimal;

@JsonComponent
public class PreparationTimeDeserializer extends JsonDeserializer<PreparationTime> {

    @Override
    public PreparationTime deserialize(JsonParser jsonParser, DeserializationContext context) throws IOException {
        return new PreparationTime(new BigDecimal(jsonParser.getDoubleValue()));
    }
}
