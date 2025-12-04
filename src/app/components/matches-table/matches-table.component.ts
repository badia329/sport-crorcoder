import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches-table',
  imports: [NgFor],
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css'],
})
export class MatchesTableComponent {
  matchesTab: any = [];
  constructor(private router: Router) {}
  ngOnInit() {
    this.matchesTab = JSON.parse(localStorage.getItem('matches') || '[]');
  }
  goToInfo(matchId: any) {
    this.router.navigate(['infoMatch/' + matchId]);
  }
  goToEdit(matchId: any) {
    this.router.navigate(['editMatch/' + matchId]);
  }
  deleteMatch(matchId: any) {
    for (let i = 0; i < this.matchesTab.length; i++) {
      if (this.matchesTab[i].id == matchId) {
        this.matchesTab.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('matches', JSON.stringify(this.matchesTab));
    console.log(matchId);
  }
}
