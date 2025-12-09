import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-match',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-match.component.html',
  styleUrl: './search-match.component.css'
})
export class SearchMatchComponent {
  searchText: string = '';
  
  matchesTab: any[] = [
    {
      id: 1,
      teamOne: "Manchester United",
      teamTwo: "Liverpool",
      scoreOne: 6,
      scoreTwo: 4
    },
    {
      id: 2,
      teamOne: "Team Liquid",
      teamTwo: "Fnatic",
      scoreOne: 10,
      scoreTwo: 9
    },
    {
      id: 3,
      teamOne: "Basketball Playoffs",
      teamTwo: "Chelsea",
      scoreOne: 5,
      scoreTwo: 6
    },
    {
      id: 4,
      teamOne: "Real Madrid",
      teamTwo: "Barcelona",
      scoreOne: 3,
      scoreTwo: 2
    },
    {
      id: 5,
      teamOne: "PSG",
      teamTwo: "Bayern Munich",
      scoreOne: 1,
      scoreTwo: 3
    }
  ];

  filteredMatches: any[] = [];

  constructor() {
    this.filteredMatches = this.matchesTab;
  }

  searchMatch() {
    if (this.searchText.trim() === '') {
      this.filteredMatches = this.matchesTab;
    } else {
      this.filteredMatches = this.matchesTab.filter(match => 
        match.teamOne.toLowerCase().includes(this.searchText.toLowerCase()) ||
        match.teamTwo.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
}