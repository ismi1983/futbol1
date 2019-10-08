import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Team } from '../models/team';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResponseTeams, ResponseTeam } from '../models/responses';

@Injectable({
    providedIn: 'root'
})

export class TeamsService {

  constructor(private http: HttpClient) {

  }

  public getTeams(): Observable<ResponseTeams> {
    return this.http.get<ResponseTeams>(`${environment.apiUrl}/teams`)
    .pipe(
      catchError((err) => {
        alert('there was an error.');
        console.log(err);
        return of(err)
      })
    );
  }

  public getTeam(id: string):Observable<ResponseTeam> {
    return this.http.get<ResponseTeam>(`${environment.apiUrl}/teams/${id}`)
    .pipe(
      catchError((err) => {
        alert('there was an error.')
        console.log(err);
        return of(err);
      })
    )
  }
  public editTeam(team: Team):Observable<ResponseTeam> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("auth")}`
      })
    };
    return this.http.put<ResponseTeam>(`${environment.apiUrl}/teams/${team.id}`, team, httpOptions)
    .pipe(
      catchError((err) => {
        alert('there was an error.')
        console.log(err);
        return of(err);
      })
    )
  }
}