import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CardTeamComponent } from './card-team/card-team.component';
import { TeamsComponent } from './teams/teams.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'teams', 
    component: MainComponent,
    children: [
      { path: '', component: TeamsComponent},
    ] 
  },
  { path: '', redirectTo: 'teams', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    CardTeamComponent,
    TeamsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
