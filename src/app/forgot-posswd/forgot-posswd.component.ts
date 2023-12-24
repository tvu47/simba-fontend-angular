import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-posswd',
  templateUrl: './forgot-posswd.component.html',
  styleUrls: ['./forgot-posswd.component.scss']
})
export class ForgotPosswdComponent {
  solution = new FormGroup({
    solv: new FormControl("p", [Validators.required])
  });
  constructor(private router: Router){

  }
  submit(){
    this.router.navigate(['/enter-code']);
  }
}
