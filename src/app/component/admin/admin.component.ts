import { Component } from '@angular/core';
import { PannerImageComponent } from "../panner-image/panner-image.component";
import { MatchesTableComponent } from "../matches-table/matches-table.component";
import { TeamsTableComponent } from "../teams-table/teams-table.component";
import { PlayersTableComponent } from "../players-table/players-table.component";

@Component({
  selector: 'app-admin',
  imports: [PannerImageComponent, MatchesTableComponent, TeamsTableComponent, PlayersTableComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
