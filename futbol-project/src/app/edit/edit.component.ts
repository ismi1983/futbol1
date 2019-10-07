import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TeamsService } from '../services/teams.services';
import { Team } from '../models/team';
import { Response, ResponseTeam } from '../models/responses';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  team$: Team;
  formTeam: FormGroup;

  constructor(
    private teamsService: TeamsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.getTeam();
  }


  createFormTeam(){
    this.formTeam = new FormGroup({
      id: new FormControl(this.team$.id, Validators.required),
      logo: new FormControl(this.team$.logo, Validators.required),
      name: new FormControl(this.team$.name, [ Validators.required, Validators.minLength(1) ]),
      location: new FormControl(this.team$.location, [ Validators.required, Validators.minLength(1) ]),
      stadium: new FormControl(this.team$.stadium, [ Validators.required, Validators.minLength(1) ]),
      games_won: new FormControl(this.team$.games_won, Validators.required),
      games_tied: new FormControl(this.team$.games_tied, Validators.required),
      games_lost: new FormControl(this.team$.games_lost, Validators.required),
      goals_in_favor: new FormControl(this.team$.goals_in_favor, Validators.required),
      goals_against: new FormControl(this.team$.goals_against, Validators.required),
    });
  }

  getTeam():void {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.teamsService.getTeam(id).subscribe((team) => {
      this.team$ = team.data;
      this.createFormTeam();
      // console.log(team);      
    });
  }

  onEdit():void {
    if (!this.formTeam.valid) {
      alert('Faltan valores requeridos');
      return;
    }
    this.editTeam(this.formTeam.value);
  }
  editTeam(team: Team): void{
    this.teamsService.editTeam(team).subscribe((result: ResponseTeam) => {
      console.log(result);      
      if (result.status === 'failure') {
        alert('There was an error');
        return;
      }
      this.team$ = result.data;
      alert('Editado correctamente');
      this.router.navigate(['./table']);
    })
  }
}
