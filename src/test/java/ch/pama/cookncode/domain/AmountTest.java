package ch.pama.cookncode.domain;

import org.assertj.core.api.ThrowableAssert.ThrowingCallable;
import org.junit.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatExceptionOfType;

public class AmountTest {

    @Test
    public void constructAmount_validAmount_constructedNewAmount() throws Exception {
        int validAmount = 1;

        Amount amount = new Amount(validAmount);

        assertThat(amount.getValue()).isEqualTo(validAmount);
    }

    @Test
    public void constructAmount_ZeroAsAmount_throwException() throws Exception {
        int invalidAmount = 0;

        ThrowingCallable tryToConstructAmount = () -> new Amount(invalidAmount);

        assertThatExceptionOfType(IllegalArgumentException.class)
                .isThrownBy(tryToConstructAmount)
                .withMessageContaining("Please provide a number greater than 0.")
                .withNoCause();
    }

    @Test
    public void constructAmount_NegativeAmount_throwException() throws Exception {
        int invalidAmount = -1;

        ThrowingCallable tryToConstructAmount = () -> new Amount(invalidAmount);

        assertThatExceptionOfType(IllegalArgumentException.class)
                .isThrownBy(tryToConstructAmount)
                .withMessageContaining("Please provide a number greater than 0.")
                .withNoCause();
    }
}