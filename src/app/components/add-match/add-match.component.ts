import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { generateId } from '../../shared/genricFunction';

@Component({
  selector: 'app-add-match',
  imports: [FormsModule],
  templateUrl: './add-match.component.html',
  styleUrl: './add-match.component.css'
})
export class AddMatchComponent {
  obj: any = {};
  addMatch() {
    const T = JSON.parse(localStorage.getItem("matchesTab") || "[]")
    this.obj.id = generateId(T);
    T.push(this.obj);
    localStorage.setItem("matchesTab", JSON.stringify(T));
    // console.log("Here is  match Obj", this.obj);
  }
}