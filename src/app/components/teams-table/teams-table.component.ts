import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-teams-table',
  imports: [NgFor],
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css'],
})
export class TeamsTableComponent {
  teamsTab: any = [];
  constructor(private router: Router, private playerService: PlayerService) {}
  ngOnInit() {
    this.playerService.getAllPlayers().subscribe();
  }
  goToEdit(teamId: any) {
    this.router.navigate(['editTeam/' + teamId]);
  }
  deletePlayer(teamId: any) {
    this.playerService.deletePlayer(teamId).subscribe()
  }
}
