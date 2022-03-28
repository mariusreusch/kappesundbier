package ch.pama.kappesundbier.interfaces.dto;

import ch.pama.kappesundbier.infrastructure.db.InstructionStepDbEntity;
import ch.pama.kappesundbier.shared.util.OnlyForFramework;

public class InstructionStepDto {

    private int sequenceNumber;
    private String stepInstruction;

    @OnlyForFramework
    private InstructionStepDto() {
    }

    private InstructionStepDto(int sequenceNumber, String stepInstruction) {
        this.sequenceNumber = sequenceNumber;
        this.stepInstruction = stepInstruction;
    }

    public int getSequenceNumber() {
        return sequenceNumber;
    }

    public String getStepInstruction() {
        return stepInstruction;
    }

    static InstructionStepDto from(InstructionStepDbEntity instructionStepDbEntity) {
        return new InstructionStepDto(instructionStepDbEntity.getSequenceNumber(), instructionStepDbEntity.getStepInstruction());
    }

    public InstructionStepDbEntity toInstructionStep() {
        return new InstructionStepDbEntity(sequenceNumber, stepInstruction);
    }
}
