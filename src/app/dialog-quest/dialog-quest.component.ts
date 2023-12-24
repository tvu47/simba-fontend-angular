import { Component, Inject, TemplateRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-quest',
  templateUrl: './dialog-quest.component.html',
  styleUrls: ['./dialog-quest.component.scss']
})
export class DialogQuestComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogQuestComponent>, @Inject(MAT_DIALOG_DATA) data: any
  ){}
  openDialogWithTemplateRef() {
  }
}
