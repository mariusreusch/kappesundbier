import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from '../recipe';
import {YesNoDialogComponent} from '../../common/components/yes-no-dialog/yes-no-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'kub-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent {

  @Input() recipe: Recipe;
  @Input() deleteDialogTitle: string;
  @Input() deleteDialogQuestion: string;

  @Output() switchToEditModeEvent = new EventEmitter<Recipe>();
  @Output() onRecipeDelete = new EventEmitter<Recipe>();

  constructor(private dialog: MatDialog) {
  }

  switchToEditMode() {
    this.switchToEditModeEvent.emit(this.recipe);
  }

  onDelete(recipe: Recipe) {
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      data: {
        question: this.deleteDialogQuestion,
        title: this.deleteDialogTitle
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.onRecipeDelete.emit(recipe);
      }
    });
  }

  getInstructionStepsOrderedBySequence() {
    return this.recipe.instructionSteps.sort((step1, step2) => step1.sequenceNumber - step2.sequenceNumber);
  }
}
