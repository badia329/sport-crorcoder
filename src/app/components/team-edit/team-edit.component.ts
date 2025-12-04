import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-edit',
  imports: [BannerComponent, FormsModule, NgIf],
  templateUrl: './team-edit.component.html',
  styleUrl: './team-edit.component.css',
})
export class TeamEditComponent {
  obj: any = {};
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    let teamsTab = JSON.parse(localStorage.getItem('teams') || '[]');
    for (let i = 0; i < teamsTab.length; i++) {
      if (teamsTab[i].id == id) {
        this.obj = teamsTab[i];
      }
    }
  }
  editTeam() {
    const teamTab = JSON.parse(localStorage.getItem('teams') || '[]');
    for (let i = 0; i < teamTab.length; i++) {
      if (teamTab[i].id == this.obj.id) {
        teamTab[i] = this.obj;
        break;
      }
    }
    localStorage.setItem('teams', JSON.stringify(teamTab));
    this.router.navigate(['admin']);
  }
}
