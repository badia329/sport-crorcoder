import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BannerComponent } from "../banner/banner.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-match-edit',
  imports: [FormsModule, BannerComponent, NgIf],
  templateUrl: './match-edit.component.html',
  styleUrl: './match-edit.component.css',
})
export class MatchEditComponent {
  obj: any = {};
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    const matchesTab = JSON.parse(localStorage.getItem('matches') || '[]');
    for (let i = 0; i < matchesTab.length; i++) {
      if (matchesTab[i].id == id) {
        this.obj = matchesTab[i];
        break;
      }
    }
  }

  editMatch(matchForm:any) {
    const matchesTab = JSON.parse(localStorage.getItem('matches') || '[]');
    for (let i = 0; i < matchesTab.length; i++) {
      if (matchesTab[i].id == this.obj.id) {
        matchesTab[i] = this.obj;
        break;
      }
    }
    localStorage.setItem('matches', JSON.stringify(matchesTab));
    this.router.navigate(['admin']);
  }
}
