import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-edit',
  imports: [BannerComponent, FormsModule, NgIf],
  templateUrl: './team-edit.component.html',
  styleUrl: './team-edit.component.css',
})
export class TeamEditComponent {
  obj: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private teamService: TeamService
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.teamService.getTeamById(id).subscribe((data) => {
      console.log('Here is data from BE', data);
      this.obj = data.obj;
    });
  }
  editTeam() {
    console.log('here is new values', this.obj);
    this.teamService.editTeam(this.obj).subscribe((response) => {
      console.log('Here is response after Team update', response);
      this.router.navigate(['admin']);
    });
  }
}
