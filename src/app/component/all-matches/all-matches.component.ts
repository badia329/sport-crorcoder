import { Component } from '@angular/core';
import { ResultComponent } from "../result/result.component";
import { NgFor } from '@angular/common';
import { PannerImageComponent } from "../panner-image/panner-image.component";

@Component({
  selector: 'app-all-matches',
  imports: [ResultComponent, NgFor, PannerImageComponent],
  templateUrl: './all-matches.component.html',
  styleUrl: './all-matches.component.css'
})
export class AllMatchesComponent {
  matchesTab: any = [
    { id: 1, scoreOne: 0, scoreTwo: 5, teamOne: "gsd", teamTwo: "lkf" }, 
    { id: 1, scoreOne: 0, scoreTwo: 5, teamOne: "gsd", teamTwo: "lkf" }, 
    { id: 1, scoreOne: 0, scoreTwo: 5, teamOne: "gsd", teamTwo: "lkf" }, 
  ]
}
