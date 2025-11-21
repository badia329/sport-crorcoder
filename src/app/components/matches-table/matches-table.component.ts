import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-matches-table',
  imports: [NgFor],
  templateUrl: './matches-table.component.html',
styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent  {
  matchesTab = [
    { id: 1, score1: 3, score2: 1, team1: 'Real Madrid', team2: 'Barcelona' },
    { id: 2, score1: 2, score2: 2, team1: 'Milan', team2: 'Inter' },
    { id: 3, score1: 1, score2: 0, team1: 'PSG', team2: 'Marseille' },
  ];
}
