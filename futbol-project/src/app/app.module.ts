import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CardTeamComponent } from './card-team/card-team.component';
import { TeamsComponent } from './teams/teams.component';
import { MainComponent } from './main/main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GeneralTableComponent } from './general-table/general-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'teams', 
    component: MainComponent,
    children: [
      { path: '', component: TeamsComponent},
    ] 
  },
  { path: 'table', 
    component: MainComponent,
    children: [
      { path: '', component: GeneralTableComponent},
    ] 
  },
  { path: '', redirectTo: 'teams', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CardTeamComponent,
    TeamsComponent,
    MainComponent,
    NavBarComponent,
    GeneralTableComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes), 
    AppRoutingModule,
    FontAwesomeModule,   
    FormsModule,
    ReactiveFormsModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
