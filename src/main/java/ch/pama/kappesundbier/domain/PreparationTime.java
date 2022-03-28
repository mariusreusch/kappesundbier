package ch.pama.kappesundbier.domain;

import java.math.BigDecimal;

public record PreparationTime(BigDecimal minutes) {

    public PreparationTime {
        if (minutes.doubleValue() <= 0) {
            throw new IllegalArgumentException("Please provide a number greater than 0.");
        }
    }
}
