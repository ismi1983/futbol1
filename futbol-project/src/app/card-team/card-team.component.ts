import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../models/team';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss']
})
export class CardTeamComponent {
  @Input() team: Team;

  constructor(private router: Router) { }


}