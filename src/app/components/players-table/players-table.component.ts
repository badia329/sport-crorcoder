import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-players-table',
  imports: [NgFor],
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css'],
})
export class PlayersTableComponent {
  playersTab: any = [];
  constructor(private router: Router, private playerService: PlayerService) {}
  ngOnInit() {
    this.playerService.getAllPlayers().subscribe();
  }

  goToEdit(playerId: any) {
    this.router.navigate(['editPlayer/' + playerId]);
  }
  deletePlayer(playerId: any) {
    this.playerService.deletePlayer(playerId).subscribe();
  }
}
