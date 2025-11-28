import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-matches-table',
  imports: [NgFor],
  templateUrl: './matches-table.component.html',
  styleUrl: './matches-table.component.css'
})
export class MatchesTableComponent {
  matchesTab: any = [
    {},{},{}
  ]
}
