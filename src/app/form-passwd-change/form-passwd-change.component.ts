import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-form-passwd-change',
  templateUrl: './form-passwd-change.component.html',
  styleUrls: ['./form-passwd-change.component.scss']
})
export class FormPasswdChangeComponent {

  matcher = new MyErrorStateMatcher();

  // cpform = new FormGroup({
  //   passwd: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(64), Validators.required]),
  //   rePasswd: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(64), Validators.required]),
  // });
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let passwd = group.get('passwd')!.value;
    let rePasswd = group.get('rePasswd')!.value
    return passwd === rePasswd ? {notSame: false} : { notSame: true }
  }
  cpform = this.fb.group({
    passwd: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(64), Validators.required]),
    rePasswd: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(64), Validators.required])
  }, { validator: this.checkPasswords})

  constructor(private fb: FormBuilder){
  }
  submit(){}
  
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control?.invalid && control?.parent?.dirty);
    const invalidParent = !!(control?.parent?.invalid && control?.parent?.dirty);

    return invalidCtrl || invalidParent;
  }
}