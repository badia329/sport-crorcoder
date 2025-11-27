import { Component } from '@angular/core';
import { ResultComponent } from "../result/result.component";
import { NgFor } from '@angular/common';
import { getFormlS } from '../../shared/genricFunction';

@Component({
  selector: 'app-matches',
  imports: [ResultComponent, NgFor],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent {

  matches: any = getFormlS("matchesTab")


}
