import { Component, OnInit } from '@angular/core';
import { CrudService, FoodAndDrink } from '../services/crud.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-manage-billiard-room',
  templateUrl: './manage-billiard-room.component.html',
  styleUrls: ['./manage-billiard-room.component.scss']
})
export class ManageBilliardRoomComponent implements OnInit{
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser(){
    this.http.get<any>(`${environment.apiBaseUrl}/user`).subscribe({
      next: value =>{console.log(value)
      console.log('--val---')},
      error: err =>{console.log(err)},
      complete: ()=>{console.log("complete!!")}
    });
  }
}