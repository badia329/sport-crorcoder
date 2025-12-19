import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BannerComponent } from '../banner/banner.component';
import { NgIf } from '@angular/common';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-edit',
  imports: [BannerComponent, FormsModule, NgIf],
  templateUrl: './player-edit.component.html',
  styleUrl: './player-edit.component.css',
})
export class PlayerEditComponent {
  obj: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService
  ) {}
  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.playerService.getPlayerById(id).subscribe((data) => {
      console.log('Here is data from BE', data);
      this.obj = data.obj;
    });
  }
  editPlayer() {
    console.log('here is new values', this.obj);
    this.playerService.editPlayer(this.obj).subscribe((response) => {
      console.log('Here is response after Player update', response);
      this.router.navigate(['admin']);
    });
  }
}
