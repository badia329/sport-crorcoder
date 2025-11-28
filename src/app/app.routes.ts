import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { SignupComponent } from './component/signup/signup.component';
import { AddTeamComponent } from './component/add-team/add-team.component';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { AdminComponent } from './component/admin/admin.component';


export const routes: Routes = [
    //Routes type predfini angular
    // [] initialisation
    {path: "", component: HomeComponent },
    {path: "signin", component: LoginComponent },
    {path: "signup", component: SignupComponent },
    {path: "addteam", component: AddTeamComponent},
    {path: "addmatch", component: AddMatchComponent},
    {path: "admin", component: AdminComponent},
    
    

];
