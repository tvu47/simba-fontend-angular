import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor() {}

  // public getData(): Observable<FoodAndDrink[]>{
  //   return this.http.get<FoodAndDrink[]>(`${this.apiServerUrl}/user`);
  // }

  // public addFoodAndDrink(foodAndDrink: FoodAndDrink): Observable<FoodAndDrink> {
  //   return this.http.post<FoodAndDrink>(
  //     `${this.apiServerUrl}/food-and-drink`,foodAndDrink);
  // }

  // public editFoodAndDrink(FoodAndDrink: FoodAndDrink): Observable<FoodAndDrink> {
  //   return this.http.put<FoodAndDrink>(
  //     `${this.apiServerUrl}/food-and-drink`,
  //     FoodAndDrink
  //   );
  // }

  // public deleteFoodAndDrink(FoodAndDrinkId: number): Observable<void> {
  //   return this.http.delete<void>(
  //     `${this.apiServerUrl}/food-and-drink/${FoodAndDrinkId}`
  //   );
  // }
}

export interface PoolTable{
  id: number;
  tableName:string;
  room: string;
  status: number;
}
export interface Discount{
  id: number;
  discountEventName:string;
  timeToStart: string;
  timeToEnd: string;
  valueSaleDown: string;
  status: number;
}
export interface FoodAndDrink{
  id: number;
  productName:string;
  price: string;
  quality: number;
  image:string;
  status: number;
}

export interface Combo{
  id: string;
  saleDown: string;
  status: boolean; 
}


