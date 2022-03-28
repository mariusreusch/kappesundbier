package ch.pama.kappesundbier.infrastructure.db;

import ch.pama.kappesundbier.shared.util.OnlyForFramework;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "instruction_step")
public class InstructionStepDbEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int sequenceNumber;
    private String stepInstruction;

    @OnlyForFramework
    private InstructionStepDbEntity() {
    }

    public InstructionStepDbEntity(int sequenceNumber, String stepInstruction) {
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
        InstructionStepDbEntity that = (InstructionStepDbEntity) o;
        return sequenceNumber == that.sequenceNumber &&
                Objects.equals(id, that.id) &&
                Objects.equals(stepInstruction, that.stepInstruction);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, sequenceNumber, stepInstruction);
    }
}
