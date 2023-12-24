import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogQuestComponent } from '../dialog-quest/dialog-quest.component';

@Component({
  selector: 'app-form-bill',
  templateUrl: './form-bill.component.html',
  styleUrls: ['./form-bill.component.scss']
})
export class FormBillComponent {
  bill = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(25)]),
    phoneNumber: new FormControl("", [Validators.required, Validators.minLength(32)])
  });
  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<FormBillComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: DialogData){
    this.bill.setValue(data);
  }
  onSubmit(){

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  deleteService(){
      this.dialog.open(DialogQuestComponent);
  }
  comeBack(){
    this.dialogRef.close();
  }
}

export interface DialogData{
  name: string,
  phoneNumber: string
}
