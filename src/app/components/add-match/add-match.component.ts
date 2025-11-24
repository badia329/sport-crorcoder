import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  imports: [FormsModule],
  templateUrl: './add-match.component.html',
  styleUrl: './add-match.component.css'
})
export class AddMatchComponent {
  obj: any =  {};
  addMatch() {
    console.log("Here is  match Obj", this.obj);
  }
}
