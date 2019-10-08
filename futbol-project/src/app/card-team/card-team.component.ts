import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../models/team';
import { Router } from '@angular/router';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss']
})
export class CardTeamComponent {

  faEdit = faEdit;
  @Input() team: Team;

  constructor(private router: Router) { }


}