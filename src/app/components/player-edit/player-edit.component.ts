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
  obj: any = [];
  constructor(
    private acitveRoute: ActivatedRoute,
    private router: Router,
    private playreService: PlayerService
  ) {}
  ngOnInit() {
    let id = this.acitveRoute.snapshot.params['id'];
    this.playreService.editPlayer(id).subscribe();
  }
  editPlayer() {
    console.log('here is new values', this.obj);
    this.playreService.editPlayer(this.obj).subscribe();
    this.router.navigate(['admin']);
  }
}
