import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { getFormlS } from '../../shared/genricFunction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches-table',
  imports: [NgFor],
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent {
  matchesTab: any = [];
  constructor(private router: Router) {}
  ngOnInit() {
    this.matchesTab = getFormlS("matchesTab");
  }
  deleteMatch(matchId: any) {
    for (let i = 0; i < this.matchesTab.length; i++) {
      if ((this.matchesTab[i].id = matchId))
        this.matchesTab.splice(i, 1)
      break;
    }
    localStorage.setItem("matchesTab", JSON.stringify(this.matchesTab));
  }
  goToInfo(matchId: any) {
    this.router.navigate(['matchInfo/' + matchId])
  }
  goToEdit(matchId: any) {
    this.router.navigate(["editMatch/" + matchId])
  }
}
