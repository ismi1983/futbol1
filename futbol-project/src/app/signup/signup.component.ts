import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    validatePassword: new FormControl('', Validators.required)
  })
  constructor() { }

  onSignup() {
    if (this.signupForm.valid) {

    } else {
      alert('¡Se requiere la información de todos los campos!')
    }
  }

  ngOnInit() {
  }

}