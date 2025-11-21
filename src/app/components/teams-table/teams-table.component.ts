import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teams-table',
  imports: [NgFor],
  templateUrl: './teams-table.component.html',
styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent {
  teamsTab: any = [
    { id: 1, name: 'Real Madrid', owner: 'Florentino Pérez', foundation: 1902 },
    { id: 2, name: 'Barcelona', owner: 'Joan Laporta', foundation: 1899 },
    { id: 3, name: 'Manchester United', owner: 'Glazer Family', foundation: 1878 },
    { id: 4, name: 'Bayern Munich', owner: 'Herbert Hainer', foundation: 1900 }
  ]
}


