import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../models/team';

@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss']
})
export class CardTeamComponent {

  constructor() { }

  @Input() team: Team;

  ngOnInit() {


  }

    showData(data: Team) {
    let team: string = `${data.name} ${data.city}`;
    alert(team)
  }

}