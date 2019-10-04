import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'

import { LoginService } from '../services/login.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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

  ngOnInit() {
  }

  onLogin() {
    if (this.loginForm.valid) {
      // this.loginService.login(this.loginForm.value)
      // .subscribe((token: string) => {
        localStorage.setItem('auth', "holis");
        this.router.navigate(['./welcome']);
      // });
    } else {
      alert('¡Información incorrecta')
    }
  }

  onLogin2(data) {
    console.log(data)
  }

  onClick() {
    console.log(this.search)
  }
}
