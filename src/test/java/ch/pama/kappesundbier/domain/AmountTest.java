package ch.pama.kappesundbier.domain;

import org.assertj.core.api.ThrowableAssert.ThrowingCallable;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatExceptionOfType;

class AmountTest {

    @Test
    void constructAmount_validAmount_constructedNewAmount() {
        BigDecimal validAmount = new BigDecimal(1);

        Amount amount = new Amount(validAmount);

        assertThat(amount.value()).isEqualTo(validAmount);
    }

    @Test
    void constructAmount_ZeroAsAmount_throwException() {
        BigDecimal invalidAmount = new BigDecimal(0);

        ThrowingCallable tryToConstructAmount = () -> new Amount(invalidAmount);

        assertThatExceptionOfType(IllegalArgumentException.class)
                .isThrownBy(tryToConstructAmount)
                .withMessageContaining("Please provide a number greater than 0.")
                .withNoCause();
    }

    @Test
    void constructAmount_NegativeAmount_throwException() {
        BigDecimal invalidAmount = new BigDecimal(-1);

        ThrowingCallable tryToConstructAmount = () -> new Amount(invalidAmount);

        assertThatExceptionOfType(IllegalArgumentException.class)
                .isThrownBy(tryToConstructAmount)
                .withMessageContaining("Please provide a number greater than 0.")
                .withNoCause();
    }
}