import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-matches-table',
  imports: [NgFor, CommonModule],
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css'],
})
export class MatchesTableComponent {
  matchesTab: any = [];
  constructor(private router: Router, private matchService: MatchService) {}
  ngOnInit() {
    this.matchService.getAllMatches().subscribe();
  }
  goToInfo(matchId: any) {
    this.router.navigate(['infoMatch/' + matchId]);
  }
  goToEdit(matchId: any) {
    this.router.navigate(['editMatch/' + matchId]);
  }
  deleteMatch(matchId: any) {
    this.matchService.deleteMatch(matchId).subscribe();
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
