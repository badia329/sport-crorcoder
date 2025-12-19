import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StadiumService } from '../../services/stadium.service';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from '../banner/banner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stadium-edit',
  imports: [FormsModule, BannerComponent, CommonModule],
  templateUrl: './stadium-edit.component.html',
  styleUrl: './stadium-edit.component.css'
})
export class StadiumEditComponent {
 obj: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private stadiumService: StadiumService
  ) {}
  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.stadiumService.getStadiumById(id).subscribe((data) => {
      console.log('Here is data from BE', data);
      this.obj = data.obj;
    });
  }
  editStadium() {
    console.log('here is new values', this.obj);
    this.stadiumService.editStadium(this.obj).subscribe((response) => {
      console.log('Here is response after Match update', response);
      this.router.navigate(['admin']);
    });
  }
}
