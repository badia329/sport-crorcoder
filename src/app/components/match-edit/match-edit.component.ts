import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BannerComponent } from '../banner/banner.component';
import { NgIf } from '@angular/common';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-match-edit',
  imports: [FormsModule, BannerComponent, NgIf],
  templateUrl: './match-edit.component.html',
  styleUrl: './match-edit.component.css',
})
export class MatchEditComponent {
  obj: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private matchService: MatchService
  ) {}
  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.matchService.editMatch(id).subscribe();
  }

  editMatch() {
    console.log('here is new values', this.obj);
    this.matchService.editMatch(this.obj).subscribe();
    this.router.navigate(['admin']);
  }
}
