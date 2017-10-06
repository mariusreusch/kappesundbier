import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'kub-yes-no-dialog',
  templateUrl: 'yes-no-dialog.component.html',
})
export class YesNoDialogComponent {

  question: string;
  title: string;

  constructor(@Inject(MD_DIALOG_DATA) private data: any) {
    this.question = data.question;
    this.title = data.title;
  }
}
