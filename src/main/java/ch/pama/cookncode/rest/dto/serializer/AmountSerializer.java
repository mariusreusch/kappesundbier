package ch.pama.cookncode.rest.dto.serializer;

import ch.pama.cookncode.domain.Amount;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import org.springframework.boot.jackson.JsonComponent;

import java.io.IOException;

@JsonComponent
public class AmountSerializer extends JsonSerializer<Amount> {

    @Override
    public void serialize(Amount amount, JsonGenerator jsonGenerator, SerializerProvider provider) throws IOException {
        jsonGenerator.writeNumber(amount.getValue());
    }
}
