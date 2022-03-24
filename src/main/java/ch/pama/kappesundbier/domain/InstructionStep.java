package ch.pama.kappesundbier.domain;

import ch.pama.kappesundbier.shared.util.OnlyForFramework;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class InstructionStep {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int sequenceNumber;
    private String stepInstruction;

    @OnlyForFramework
    private InstructionStep() {
    }

    public InstructionStep(int sequenceNumber, String stepInstruction) {
        this.sequenceNumber = sequenceNumber;
        this.stepInstruction = stepInstruction;
    }

    public int getSequenceNumber() {
        return sequenceNumber;
    }

    public String getStepInstruction() {
        return stepInstruction;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        InstructionStep that = (InstructionStep) o;
        return sequenceNumber == that.sequenceNumber &&
                Objects.equals(id, that.id) &&
                Objects.equals(stepInstruction, that.stepInstruction);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, sequenceNumber, stepInstruction);
    }
}
