package ch.pama.cookncode.domain;

import java.math.BigDecimal;

public class PreparationTime {

  private BigDecimal minutes;

  public PreparationTime(BigDecimal minutes) {
    if (minutes.doubleValue() <= 0) {
      throw new IllegalArgumentException("Please provide a number greater than 0.");
    }
    this.minutes = minutes;
  }

  public BigDecimal getValue() {

    return minutes;
  }
}
