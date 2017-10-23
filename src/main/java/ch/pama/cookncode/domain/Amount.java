package ch.pama.cookncode.domain;

public class Amount {
    private int amount;

    public Amount(int amount) {
        if (amount < 0) {
            throw new IllegalArgumentException("Please provide an an ite greater than -1.");
        }
        this.amount = amount;
    }

    public int getValue() {
        return amount;
    }
}
