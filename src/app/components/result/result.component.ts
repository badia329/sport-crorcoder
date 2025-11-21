import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  imports: [NgFor],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
@Input () obj: any = {};
}
