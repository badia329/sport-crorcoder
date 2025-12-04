import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { MatchEditComponent } from './components/match-edit/match-edit.component';
import { TeamEditComponent } from './components/team-edit/team-edit.component';
import { PlayerEditComponent } from './components/player-edit/player-edit.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'addMatch', component: AddMatchComponent },
  { path: 'addTeam', component: AddTeamComponent },
  { path: 'addPlayer', component: AddPlayerComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'infoMatch/:id', component: MatchInfoComponent },
  { path: 'editMatch/:id', component: MatchEditComponent },
  { path: 'editTeam/:id', component: TeamEditComponent },
  { path: 'editPlayer/:id', component: PlayerEditComponent },
];
