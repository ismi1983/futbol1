import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { Team } from '../models/team'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TeamResponse } from '../models/TeamResponse';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  providers: [ TeamsService ]
})
export class TeamsComponent {
  
 teams: Team[]; 

 constructor(private teamService: TeamsService) {
   this.teamService.getTeams().subscribe(
    (data) => {this.teams = data.data}
  );
}

  }
