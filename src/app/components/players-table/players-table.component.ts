import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-players-table',
  imports: [NgFor],
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent {
  playersTab = [
    { id: 1, name: 'Lionel Messi', position: 'Forward', nbr: 10 },
    { id: 2, name: 'Cristiano Ronaldo', position: 'Forward', nbr: 7 },
    { id: 3, name: 'Kevin De Bruyne', position: 'Midfielder', nbr: 17 },
    { id: 4, name: 'Virgil van Dijk', position: 'Defender', nbr: 4 }
  ];
}
