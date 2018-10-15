package ch.pama.cookncode.rest.dto.serializer;

import ch.pama.cookncode.domain.PreparationTime;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import org.springframework.boot.jackson.JsonComponent;

import java.io.IOException;

@JsonComponent
public class PreparationTimeSerializer extends JsonSerializer<PreparationTime> {

    @Override
    public void serialize(PreparationTime preparationTime, JsonGenerator jsonGenerator, SerializerProvider provider) throws IOException {
        jsonGenerator.writeNumber(preparationTime.getValue());
    }
}
