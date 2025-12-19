import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-search-match',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-match.component.html',
  styleUrl: './search-match.component.css',
})
export class SearchMatchComponent {
  obj: any = {};
  resultTab: any = [];
  constructor(private matchService: MatchService) {}
  search() {
    this.matchService.searchMatchByTeamName(this.obj).subscribe((data) => {
      console.log('Here is data after search', data);
      this.resultTab = data.tab;
    });
  }
}
