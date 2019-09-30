import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 
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

  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    if (this.loginForm.valid) {

    } else {
      alert('Wrong credentials!')
    }
  }

  onLogin2(data) {
    console.log(data)
  }

  onClick() {
    console.log(this.search)
  }
}
