package ch.pama.cookncode.rest.dto.serializer;

import ch.pama.cookncode.domain.Amount;
import org.codehaus.jackson.JsonGenerator;
import org.codehaus.jackson.map.JsonSerializer;
import org.codehaus.jackson.map.SerializerProvider;
import org.springframework.boot.jackson.JsonComponent;

import java.io.IOException;

@JsonComponent
public class AmountSerializer extends JsonSerializer<Amount> {

    @Override
    public void serialize(Amount amount, JsonGenerator jgen, SerializerProvider provider) throws IOException {
        jgen.writeNumber(amount.getValue());
    }
}
