import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-teams-table',
  imports: [CommonModule],
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css'],
})
export class TeamsTableComponent {
  teamsTab: any = [];
  constructor(private router: Router, private teamService: TeamService
  ) {}
  ngOnInit() {
    this.teamService.getAllteams().subscribe((data) => {
      console.log('Here is data from BE', data);
      this.teamsTab = data.tab;
    });
  }
  goToEdit(teamId: string) {
    this.router.navigate(['editTeam/' + teamId]);
  }
  deleteTeam(teamId: string) {
    this.teamService.deleteTeam(teamId).subscribe((response) => {
      console.log('Here is response after match delete', response);
      if (response.isDeleted) {
        this.teamService.getAllteams().subscribe((data) => {
          this.teamsTab = data.tab;
        });
      }
    });
  }
}
