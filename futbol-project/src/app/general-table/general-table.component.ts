import { Component } from '@angular/core';

import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { Team } from '../models/team';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.scss']
})
export class GeneralTableComponent {

  faEdit = faEdit;

  teams$: Observable<Team[]>;

  constructor(private teamService: TeamsService) {
    this.teams$ = this.teamService.getTeams().pipe(
      map(results => results.data.sort((a, b) => a.position - b.position))
    );
  }

}
