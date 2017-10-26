package ch.pama.cookncode.rest.dto.serializer;

import ch.pama.cookncode.domain.Amount;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import org.springframework.boot.jackson.JsonComponent;

import java.io.IOException;

@JsonComponent
public class AmountDeserializer extends JsonDeserializer<Amount> {

    @Override
    public Amount deserialize(JsonParser jsonParser, DeserializationContext context) throws IOException {
        return new Amount(jsonParser.getIntValue());
    }
}
