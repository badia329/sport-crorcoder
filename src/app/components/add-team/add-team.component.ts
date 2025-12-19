import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TeamService } from '../../services/team.service';
import { StadiumService } from '../../services/stadium.service';

@Component({
  selector: 'app-add-team',
  imports: [BannerComponent, FormsModule, CommonModule],
  templateUrl: './add-team.component.html',
  styleUrl: './add-team.component.css',
})
export class AddTeamComponent {
  obj: any = {};
  stadiumTab: any = [];
  constructor(
    private teamService: TeamService,
    private stadiumService: StadiumService
  ) {}
  ngOnInit() {
    this.stadiumService.getAllStadium().subscribe((data) => {
      console.log('Here is all team from BE', data.tab);
      this.stadiumTab = data.tab;
    })
  }
  addTeam() {
    console.log('Here is team obj', this.obj);
    this.teamService.addTeam(this.obj).subscribe((data) => {
      console.log('Here is response from adding Team', data);
    });
  }
}
