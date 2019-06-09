package ch.pama.cookncode.rest.dto;

import ch.pama.cookncode.domain.InstructionStep;
import ch.pama.cookncode.util.OnlyForFramework;

public class InstructionStepDto {

  private int sequenceNumber;
  private String stepInstruction;

  @OnlyForFramework
  private InstructionStepDto(){
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

  static InstructionStepDto from(InstructionStep instructionStep) {
    return new InstructionStepDto(instructionStep.getSequenceNumber(), instructionStep.getStepInstruction());
  }

  public InstructionStep toInstructionStep() {
    return new InstructionStep(sequenceNumber, stepInstruction);
  }
}
