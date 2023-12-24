import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
  val = new FormGroup({
    code: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]+')]),
  });

  constructor(private router: Router){

  }

  submit(){
    console.log(this.val.value)
    //kiem tra xem mat ma co dung k, neu khong dung thi xuat ra loi
    // dung if else
    // neu dung thi navigate sang trang moi
    this.router.navigate(['change-password'])
  }
}
