import { Component } from '@angular/core';
import { StadiumService } from '../../services/stadium.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stadium-table',
  imports: [CommonModule],
  templateUrl: './stadium-table.component.html',
  styleUrl: './stadium-table.component.css'
})
export class StadiumTableComponent {
stadiumTab: any = [];
  constructor(private router: Router, private stadiumService: StadiumService) {}
  ngOnInit() {
    this.stadiumService.getAllStadium().subscribe((data) => {
      console.log('Here is data from BE', data);
      this.stadiumTab = data.tab;
    });
  }
  goToInfo(stadiumId: string) {
    this.router.navigate(['infostadium/' + stadiumId]);
  }
  goToEdit(stadiumId: string) {
    this.router.navigate(['editStadium/' + stadiumId]);
  }
  deleteStadium(stadiumId: string) {
    this.stadiumService.deleteStadium(stadiumId).subscribe((response) => {
      console.log('Here is response after stadium delete', response);
      if (response.isDeleted) {
        this.stadiumService.getAllStadium().subscribe((data) => {
          this.stadiumTab = data.tab;
        });
      }
    });
  }

}
