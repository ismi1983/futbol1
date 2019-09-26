import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.services';
import { Team } from '../models/team'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  providers: [ TeamsService ]
})
export class TeamsComponent implements OnInit {

  public teams: Team[];

  constructor(private teamsService: TeamsService) {
    this.teamsService.getTeams().subscribe(data => {
      this.teams = data;
    });
   

   this.teams = [
     {
       name: 'America',
       city: 'CDMX',
       stadium: 'Estadio Azteca',
       position: 3,
       points: 15
     },
     {
       name: 'Atlas',
       city: 'Guadalajara',
       stadium: 'Estadio Jalisco',
       position: 4,
       points: 11
       
     }
   ]

  // ngOnInit() {
  // }

}
