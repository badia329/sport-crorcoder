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
    private teamServer: TeamService
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.teamServer.editTeam(id).subscribe();
  }
  editTeam() {
    console.log('here is new values', this.obj)
    this.teamServer.editTeam(this.obj).subscribe()
    this.router.navigate(['admin']);
  }
}
