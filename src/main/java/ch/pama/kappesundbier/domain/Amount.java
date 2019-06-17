package ch.pama.kappesundbier.domain;

import java.math.BigDecimal;

public class Amount {

  private BigDecimal amount;

  public Amount(BigDecimal amount) {
    if (amount.doubleValue() <= 0) {
      throw new IllegalArgumentException("Please provide a number greater than 0.");
    }
    this.amount = amount;
  }

  public BigDecimal getValue() {

    return amount;
  }
}
