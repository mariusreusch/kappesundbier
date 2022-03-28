package ch.pama.kappesundbier.domain;

import java.math.BigDecimal;

public record Amount(BigDecimal value) {

    public Amount {
        if (value.doubleValue() <= 0) {
            throw new IllegalArgumentException("Please provide a number greater than 0.");
        }
    }
}
