import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teams-table',
  imports: [NgFor],
  templateUrl: './teams-table.component.html',
  styleUrl: './teams-table.component.css'
})
export class TeamsTableComponent {
matchesTab: any = [
  {id: 1 ,scoreOne: 1 , scoreTwo: 2, teamOne:"fdsf", teamTwo: "kdf" } 
]
}
