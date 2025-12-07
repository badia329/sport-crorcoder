import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from '../banner/banner.component';
import { generateId } from '../../shared/genricFunction';
import { NgIf } from '@angular/common';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-add-player',
  imports: [FormsModule, BannerComponent, NgIf],
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.css',
})
export class AddPlayerComponent {
  obj: any = {};
  constructor(private playerservice: PlayerService) {}

  addPlayer() {
    this.playerservice.getPlayerById(this.obj).subscribe();
    
  }
}
