import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Team } from '../models/team';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class TeamsService {

    constructor(private http: HttpClient) {

    }

    public getTeams(): Observable<Team[]> {
        return this.http.get<Team[]>(`${environment.apiUrl}`)
        .pipe(
            catchError((err) => {
                alert('there was an error.');
                return of(err)
            })
        );
    }
}