import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-input-simple',
  templateUrl: './input-simple.component.html',
  styleUrls: ['./input-simple.component.scss']
})
export class InputSimpleComponent {
  constructor(private http: HttpClient, public auth: AuthService){}

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser(){
    this.http.get<any>(`${environment.apiBaseUrl}/user/login-ota`).subscribe({
      next: value =>{console.log(value + 'successfully')},
      error: err =>{console.log(err)},
      complete: ()=>{console.log("complete!!")}
    });
  }
}
