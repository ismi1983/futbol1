import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Credentials } from '../models/credentials';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credentials: Credentials){
    
    return this.http.post(`${environment.apiUrl}/user/login`, credentials)
    .pipe(
      catchError((err) => {
        alert('there was an error.');
        console.log(err);
        return (err)
    })
    )
  }

  isLogged(): boolean{
    return !!localStorage.getItem('auth');
  };

  logOut(): void {
    localStorage.removeItem('auth');
  }
}
