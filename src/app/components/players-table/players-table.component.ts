import { NgFor} from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-table',
  imports: [NgFor],
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css'],
})
export class PlayersTableComponent {
  playersTab: any = [];
  constructor(private router: Router) {}
  ngOnInit() {
    this.playersTab = JSON.parse(localStorage.getItem('players') || '[]');
  }

  goToEdit(playerId: any) {
    this.router.navigate(['editPlayer/' + playerId]);
  }
 deletePlayer() {}
}
