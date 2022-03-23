package ch.pama.kappesundbier.rest.dto.serializer;

import ch.pama.kappesundbier.domain.PreparationTime;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import org.springframework.boot.jackson.JsonComponent;

import java.io.IOException;
import java.math.BigDecimal;

@JsonComponent
public class PreparationTimeSerialization {

    public static class PreparationTimeSerializer extends JsonSerializer<PreparationTime> {

        @Override
        public void serialize(PreparationTime preparationTime, JsonGenerator jsonGenerator,
                              SerializerProvider provider) throws IOException {
            jsonGenerator.writeNumber(preparationTime.getValue());
        }
    }

    public static class PreparationTimeDeserializer extends JsonDeserializer<PreparationTime> {

        @Override
        public PreparationTime deserialize(JsonParser jsonParser, DeserializationContext context)
                throws IOException {
            return new PreparationTime(new BigDecimal(jsonParser.getDoubleValue()));
        }
    }

}
