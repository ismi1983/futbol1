import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Credentials } from '../models/credentials';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signup(credentials: Credentials){
    
    return this.http.post(`${environment.apiUrl}/user`, credentials)
    .pipe(
      catchError((err) => {
        alert('there was an error.');
        console.log(err);
        return of(err)
    })
    )
  }

}
