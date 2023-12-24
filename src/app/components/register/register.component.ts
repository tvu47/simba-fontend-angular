import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  regist = new FormGroup({
    fullName: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(41)]),
    birthday: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.minLength(5),Validators.maxLength(32)]),
    phoneNumber: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(12), Validators.pattern('[- +()0-9]+')]),
    password: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(32)]),
    coPassword: new FormControl("", [Validators.required,Validators.minLength(5), Validators.maxLength(32)]),
    gender: new FormControl("F", [Validators.required, Validators.maxLength(1)]),
  });
  constructor(public httpClient: HttpClient){}
  ngOnInit(): void {
    
  }
  signUp(){
    console.log(this.regist.value)
  }
}
