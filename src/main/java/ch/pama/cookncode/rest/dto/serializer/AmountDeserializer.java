package ch.pama.cookncode.rest.dto.serializer;

import ch.pama.cookncode.domain.Amount;
import org.codehaus.jackson.JsonParser;
import org.codehaus.jackson.map.DeserializationContext;
import org.codehaus.jackson.map.JsonDeserializer;
import org.springframework.boot.jackson.JsonComponent;

import java.io.IOException;

@JsonComponent
public class AmountDeserializer extends JsonDeserializer<Amount> {

    @Override
    public Amount deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException {
        return new Amount(jp.getIntValue());
    }
}
