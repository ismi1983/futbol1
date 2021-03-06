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
import { WelcomeComponent } from './welcome/welcome.component';
import { EditComponent } from './edit/edit.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  { path: 'teams', 
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: TeamsComponent},
    ] 
  },
  { path: 'table', 
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: GeneralTableComponent},
    ] 
  },
  { path: 'welcome',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: WelcomeComponent }
    ],
  },
  { path: 'edit/:id',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: EditComponent }
    ],
  },
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
    WelcomeComponent,
    EditComponent,
    SignupComponent,
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
