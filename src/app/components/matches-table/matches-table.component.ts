import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-matches-table',
  imports: [CommonModule],
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css'],
})
export class MatchesTableComponent {
  matchesTab: any = [];
  constructor(private router: Router, private matchService: MatchService) {}
  ngOnInit() {
    this.matchService.getAllMatches().subscribe((data) => {
      console.log('Here is data from BE', data);
      this.matchesTab = data.tab;
    });
  }
  goToInfo(matchId: string) {
    this.router.navigate(['infoMatch/' + matchId]);
  }
  goToEdit(matchId: string) {
    this.router.navigate(['editMatch/' + matchId]);
  }
  deleteMatch(matchId: string) {
    this.matchService.deleteMatch(matchId).subscribe((response) => {
      console.log('Here is response after match delete', response);
      if (response.isDeleted) {
        this.matchService.getAllMatches().subscribe((data) => {
          this.matchesTab = data.tab;
        });
      }
    });
  }

  scoreColor(numberOne: number, numberTwo: number) {
    return numberOne > numberTwo
      ? 'green'
      : numberOne < numberTwo
      ? 'yellow'
      : 'Fuchsia';
  }
  message(obj: any) {
    return obj.scoreOne > obj.scoreTwo
      ? obj.teamOne + ' is the winner'
      : obj.scoreOne < obj.scoreTwo
      ? obj.teamTwo + ' is the loser'
      : 'draw';
  }
}
