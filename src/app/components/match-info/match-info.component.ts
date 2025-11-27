import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getFormlS } from '../../shared/genricFunction';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-match-info',
  imports: [ResultComponent],
  templateUrl: './match-info.component.html',
  styleUrl: './match-info.component.css'
})
export class MatchInfoComponent {
  foundMatch: any = {};
  constructor(private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    // Get ID from Path
    let matchId = this.activatedRoute.snapshot.params["id"];
    // Get matches from LS (mathcesTab : Key)
    let matches = getFormlS("matchesTab");
    for (let i = 0; i < matches.length; i++) {
      if (matches[i].id == matchId) {
        this.foundMatch = matches[i];
        break;
      }
    }
  }
}
