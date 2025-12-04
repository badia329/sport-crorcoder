import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { generateId } from '../../shared/genricFunction';
import { BannerComponent } from '../banner/banner.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-match',
  imports: [FormsModule, BannerComponent, NgIf],
  templateUrl: './add-match.component.html',
  styleUrl: './add-match.component.css',
})
export class AddMatchComponent {
  obj: any = {};
  addMatch(matchForm: any) {
    if (matchForm.valid) {
      const matches = JSON.parse(localStorage.getItem('matches') || '[]');
      this.obj.id = generateId(matches);
      matches.push(this.obj);
      localStorage.setItem('matches', JSON.stringify(matches));
      console.log('Here is  match Obj', this.obj);
      matchForm.resetForm();
      this.obj = {}; 
    }
  }
}
