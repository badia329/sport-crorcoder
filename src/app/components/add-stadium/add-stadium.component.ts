import { Component } from '@angular/core';
import { StadiumService } from '../../services/stadium.service';
import { BannerComponent } from '../banner/banner.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-stadium',
  imports: [BannerComponent, FormsModule, CommonModule],
  templateUrl: './add-stadium.component.html',
  styleUrl: './add-stadium.component.css',
})
export class AddStadiumComponent {
  obj: any = {};
  constructor(private stadiumService: StadiumService) {}
  addStadium() {
    console.log('Here is  match Obj', this.obj);
    this.stadiumService.addStadium(this.obj).subscribe((response) => {
      console.log('Here is response from adding match', response);
    });
  }
}
