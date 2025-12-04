import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BannerComponent } from '../banner/banner.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-player-edit',
  imports: [BannerComponent, FormsModule, NgIf],
  templateUrl: './player-edit.component.html',
  styleUrl: './player-edit.component.css',
})
export class PlayerEditComponent {
  obj: any = [];
  constructor(private acitveRoute: ActivatedRoute) {}
  ngOnInit() {}
  editPlayer(playerForm:any) {}
}
