import { Component } from '@angular/core';
import { ResultComponent } from '../result/result.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-matches',
  imports: [ResultComponent, NgFor],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css',
})
export class MatchesComponent {
  matchesTab: any = [];
  ngOnInit() {
    this.matchesTab= JSON.parse(localStorage.getItem("matches") || "[]");
  }
}
