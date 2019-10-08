import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { Response } from '../models/responses';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    validatePassword: new FormControl('', Validators.required)
  })
  constructor(private signupService: SignupService, private router: Router) {
    if(localStorage.getItem('auth')){
      this.router.navigate(['./welcome']);
    }
  }
  
    onSignup():void {
      if (this.signupForm.valid) {
        this.signupService.signup(this.signupForm.value)
        .subscribe((response: Response): void => {
          console.log(response)
          if (!response) {
            alert('¡Información incorrecta!')
          } else {
            alert('Registro exitoso')
            this.router.navigate(['./']);
          }
        });
      } else {
        alert('¡Información faltante o con mal formato!')
      }
    }



}
