import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-add-team',
  imports: [BannerComponent, FormsModule, NgIf],
  templateUrl: './add-team.component.html',
  styleUrl: './add-team.component.css',
})
export class AddTeamComponent {
  obj: any = {};
  constructor(private teamService: TeamService) {}
  teamForm: any;
  addTeam() {
    this.teamService.getTeamById(this.obj).subscribe;
  }
}
