import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams-table',
  imports: [NgFor],
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css'],
})
export class TeamsTableComponent {
  teamsTab: any = [];
  constructor(private router: Router) {}
  ngOnInit() {
    this.teamsTab = JSON.parse(localStorage.getItem('teams') || '[]');
  }
  goToEdit(teamId: any) {
    this.router.navigate(['editTeam/' + teamId]);
  }
  deletePlayer(teamId: any) {
    for (let i = 0; i < this.teamsTab.length; i++) {
      if (this.teamsTab[i].id == teamId) {
        this.teamsTab.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("teams", JSON.stringify(this.teamsTab))
    console.log(this.teamsTab);

  }
}
