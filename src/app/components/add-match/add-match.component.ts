import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from '../banner/banner.component';
import { NgIf } from '@angular/common';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-add-match',
  imports: [FormsModule, BannerComponent, NgIf],
  templateUrl: './add-match.component.html',
  styleUrl: './add-match.component.css',
})
export class AddMatchComponent {
  obj: any = {};
  constructor(private matchService: MatchService) {}
  addMatch() {
    console.log('Here is  match Obj', this.obj);
    this.matchService.addMatch(this.obj).subscribe();
  }
}
