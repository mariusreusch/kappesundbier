package ch.pama.kappesundbier.interfaces.dto.serializer;

import ch.pama.kappesundbier.domain.Amount;
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
public class AmountSerialization {

    public static class AmountSerializer extends JsonSerializer<Amount> {

        @Override
        public void serialize(Amount amount, JsonGenerator jsonGenerator, SerializerProvider provider)
                throws IOException {
            jsonGenerator.writeNumber(amount.getValue());
        }
    }

    public static class AmountDeserializer extends JsonDeserializer<Amount> {

        @Override
        public Amount deserialize(JsonParser jsonParser, DeserializationContext context)
                throws IOException {
            return new Amount(new BigDecimal(jsonParser.getDoubleValue()));
        }
    }
}
