import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'

import { LoginService } from '../services/login.service';
import { ResponseLogin } from '../models/responses';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent{

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  });

  search: string = '';

  constructor(private loginService: LoginService, private router: Router) { 
    if(localStorage.getItem('auth')){
      this.router.navigate(['./welcome']);
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value)
      .subscribe((response: ResponseLogin) => {
        if (response.status !== 'success') {
          alert('¡Email o contraseña incorrectos!')
        } else {
          localStorage.setItem('auth', response.data.token);
          this.router.navigate(['./welcome']);
        }
      });
    } else {
      alert('¡Información faltante o con mal formato!')
    }
  }

}
