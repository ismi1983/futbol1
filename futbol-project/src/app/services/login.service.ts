import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Credentials } from '../models/credentials';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credentials: Credentials){
    // console.log(credentials);
    
    return this.http.post(`${environment.apiUrl}/user/login`, credentials)
    .pipe(
      catchError((err) => {
        alert('there was an error.');
        console.log(err);
        return of(err)
    })
    )
  }

  isLogged(): boolean{
    // console.log('Auth: '+localStorage.getItem('auth'));
    return !!localStorage.getItem('auth');
  };

  logOut(): void {
    // console.log('logOut');
    localStorage.removeItem('auth');
  }
}
