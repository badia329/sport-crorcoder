import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from '../banner/banner.component';
import { CommonModule} from '@angular/common';
import { PlayerService } from '../../services/player.service';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-add-player',
  imports: [FormsModule, BannerComponent, CommonModule],
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.css',
})
export class AddPlayerComponent {
  obj: any = {};
  teamsTab: any = [];
  constructor(
    private playerservice: PlayerService,
    private teamSearvice: TeamService
  ) {}
  ngOnInit() {
    this.teamSearvice.getAllteams().subscribe((data) => {
      console.log('Here is all team from Be', data.tab);
      this.teamsTab = data.tab;
    });
  }
  addPlayer() {
    console.log('Here is  player Obj', this.obj);
    this.playerservice.addPlayer(this.obj).subscribe((data) => {
      console.log('Here is response from adding player ', data);
    });
  }
}
