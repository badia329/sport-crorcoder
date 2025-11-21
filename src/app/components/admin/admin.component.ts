import { Component } from '@angular/core';
import { MatchesTableComponent, } from '../matches-table/matches-table.component';
import { PlayersTableComponent } from '../players-table/players-table.component';
import { TeamsTableComponent } from '../teams-table/teams-table.component';

@Component({
  selector: 'app-admin',
  imports: [TeamsTableComponent, MatchesTableComponent, PlayersTableComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
