import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
  login = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(32)]),
    password: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(32)])
  });
  
  constructor(private router: Router){  
  }

  onSubmit(){
    console.log(this.login.value)
    // this.router.navigate(['/admin']);
  }
}
