import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Team } from '../models/team';
import { TeamResponse } from '../models/TeamResponse';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class TeamsService {

    constructor(private http: HttpClient) {

    }

    public getTeams(): Observable<TeamResponse> {
        return this.http.get<TeamResponse>(`${environment.apiUrl}/teams`)
        .pipe(
            catchError((err) => {
                alert('there was an error.');
                console.log(err);
                debugger;
                return of(err)
            })
        );
    }

    public getTeam(id: string):Observable<TeamResponse> {
        return this.http.get<TeamResponse>(`${environment.apiUrl}/${id}`)
        .pipe(
            catchError((err) => {
                alert('there was an error.')
                console.log(err);
                return of(err);
            })
        )
    }
    public editTeam(team: Team):Observable<TeamResponse> {
        return this.http.put<TeamResponse>(`${environment.apiUrl}/${team.id}`, team)
        .pipe(
            catchError((err) => {
                alert('there was an error.')
                console.log(err);
                return of(err);
            })
        )
    }
}