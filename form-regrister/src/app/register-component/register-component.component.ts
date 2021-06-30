import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  formRegister: FormGroup | undefined
  submitted = false

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(18)]],
      password: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
      confirmPassword: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('(84|0[3|5|7|8|9])+([0-9]{8})')]]
    },
      {
        validators: this.MustMatch('password','confirmPassword')
      })
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }
      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  submit() {
    this.submitted = true;
    // @ts-ignore
    let data = this.formRegister.value;
    console.log(data)
  }

  get email() {
    // @ts-ignore
    return this.formRegister?.get('email')
  }

  get age() {
    return this.formRegister?.get('age')
  }

  get password() {
    return this.formRegister?.get('password')
  }

  get confirmPassword() {
    return this.formRegister?.get('confirmPassword')
  }

  get phone() {
    return this.formRegister?.get('phone')
  }

  get gender() {
    return this.formRegister?.get('gender')
  }
}
