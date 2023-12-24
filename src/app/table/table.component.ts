import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBillComponent } from '../form-bill/form-bill.component';
import { DialogQuestComponent } from '../dialog-quest/dialog-quest.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent {

  @Input() item: any; 
  
  _statusDefault: any;
  
  constructor(public dialog: MatDialog){
    this._statusDefault = false;
  }

  changeStatus(){
    if(this._statusDefault == false){
      this.dialog.open(DialogQuestComponent);
    }else
      this.openDialog();
      this._statusDefault = !this._statusDefault;
      console.log(this.item.tableName)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormBillComponent, {
      width: '500px',
      data: {name: this.item.tableName, phoneNumber: this.item.tableName}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
