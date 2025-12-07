import { NgStyle, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  imports: [NgStyle, NgClass],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export class ResultComponent {
  @Input() obj: any = {};

  scoreColor(numberOne: number, numberTwo: number): string {
    return numberOne > numberTwo
      ? 'green'
      : numberOne < numberTwo
      ? 'blue'
      : 'yellow';
  }
}
