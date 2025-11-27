import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { getFormlS } from '../../shared/genricFunction';

@Component({
  selector: 'app-match-edit',
  imports: [FormsModule],
  templateUrl: './match-edit.component.html',
  styleUrl: './match-edit.component.css'
})
export class MatchEditComponent {

  obj: any = {};
  constructor(private activedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    let id = this.activedRoute.snapshot.params['mId'];
    let matches = getFormlS("matchesTab");
    for (let i = 0; i < matches.length; i++) {
      this.obj = matches[i];
      break;
    }
  }
  editMatch() {
    console.log("here is new value", this.obj);
    let matches = getFormlS("matchesTab");
    for (let i = 0; i < matches.length; i++) {
      if (matches[i].id == this.obj.id) {
        matches[i] = this.obj;
        break;
      }
    }
    localStorage.setItem("matchesTab", JSON.stringify(matches));
    this.router.navigate(["admin"]);
  }
}
