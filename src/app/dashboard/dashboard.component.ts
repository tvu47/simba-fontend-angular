import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  dataList: Array<{id: number, tableName:String}> = [
    {id:1, tableName:'Table1'}, 
    {id:2, tableName:'Table2'},
    {id:3, tableName:'Table3'},
    {id:4, tableName:'Table4'},
    {id:5, tableName:'Table5'}, 
    {id:2, tableName:'Table2'},
    {id:3, tableName:'Table3'},
    {id:4, tableName:'Table4'},
    {id:5, tableName:'Table5'}, 
    {id:2, tableName:'Table2'},
    {id:3, tableName:'Table3'},
    {id:4, tableName:'Table4'},
    {id:5, tableName:'Table5'}, 
    {id:2, tableName:'Table2'},
    {id:3, tableName:'Table3'},
    {id:4, tableName:'Table4'},
    {id:5, tableName:'Table5'}, 
    {id:2, tableName:'Table2'},
    {id:3, tableName:'Table3'},
    {id:4, tableName:'Table4'},
    {id:5, tableName:'Table5'}, 
    {id:2, tableName:'Table2'},
    {id:3, tableName:'Table3'},
    {id:4, tableName:'Table4'},
    {id:5, tableName:'Table5'}];
    
}
