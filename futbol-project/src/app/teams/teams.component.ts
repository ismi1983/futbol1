import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.services';
import { Team } from '../models/team'

import { Observable } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  providers: [ TeamsService ]
})
export class TeamsComponent implements OnInit {
  
  public team$: Observable<Team[]>;

  constructor(private teamService: TeamsService) {
    this.team$ = this.teamService.getTeams();

  }

  ngOnInit() {
  }

}
