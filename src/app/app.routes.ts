import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesComponent } from './components/matches/matches.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "signin", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "addMatch", component: AddMatchComponent },
    { path: "addTeam", component: AddTeamComponent },
    { path: "admin", component: AdminComponent },
    { path: "matches", component: MatchesComponent },
];
