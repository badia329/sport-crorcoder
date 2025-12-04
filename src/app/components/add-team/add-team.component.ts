import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { generateId } from '../../shared/genricFunction';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-team',
  imports: [BannerComponent, FormsModule, NgIf],
  templateUrl: './add-team.component.html',
  styleUrl: './add-team.component.css',
})
export class AddTeamComponent {
  obj: any = {};
teamForm: any;
  addTeam(teamForm: any) {
    if (teamForm.valid) {
      const teams = JSON.parse(localStorage.getItem('teams') || '[]');
      this.obj.id = generateId(teams);
      teams.push(this.obj);
      localStorage.setItem('teams', JSON.stringify(teams));
      console.log('here is obj teams', teams);
      teamForm.resetForm();
      this.obj = {};
    }
  }
}
