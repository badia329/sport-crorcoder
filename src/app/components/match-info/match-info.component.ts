import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getFormlS } from '../../shared/genricFunction';
import { ResultComponent } from '../result/result.component';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-match-info',
  imports: [ResultComponent],
  templateUrl: './match-info.component.html',
  styleUrl: './match-info.component.css',
})
export class MatchInfoComponent {
  foundMatch: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService
  ) {}
  ngOnInit() {
    let matchId = this.activatedRoute.snapshot.params['id'];
    this.matchService.getMatchById(matchId).subscribe();
  }
}
