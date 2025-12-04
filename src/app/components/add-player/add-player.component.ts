import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from '../banner/banner.component';
import { generateId } from '../../shared/genricFunction';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-player',
  imports: [FormsModule, BannerComponent, NgIf],
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.css',
})
export class AddPlayerComponent {
  obj: any = {};

  addPlayer(playerForm: any) {
    if (playerForm.valid) {
      const players = JSON.parse(localStorage.getItem('players') || '[]');
      this.obj.id = generateId(players);
      players.push(this.obj);
      localStorage.setItem('players', JSON.stringify(players));
      console.log('Here is player obj', this.obj);
      playerForm.resetForm(); 
      this.obj = {}; 
    } 
  }
}
