import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Signup } from '../models/signup';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ResponseSignup } from '../models/responses'

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signup(credentials: Signup): Observable<ResponseSignup> {
    return this.http.post<ResponseSignup>(`${environment.apiUrl}/user`, credentials);
  }
}

