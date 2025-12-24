import { NgStyle, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-result',
  imports: [NgStyle, NgClass],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export class ResultComponent {
  @Input() obj: any = {};
  @Output() matchesToSend: EventEmitter<any> = new EventEmitter();
  constructor(private mService: MatchService) {}
  scoreColor(numberOne: number, numberTwo: number): string {
    return numberOne > numberTwo
      ? 'green'
      : numberOne < numberTwo
      ? 'blue'
      : 'yellow';
  }
  deleteMatch(id: any) {
    alert(id);
    this.mService.deleteMatch(id).subscribe((data) => {
      console.log('Here is response after deleting match ', data);
      if (data.isDeleted) {
        this.mService.getAllMatches().subscribe((data) => {
          console.log('Here is dat From Be ', data.tab);
          this.matchesToSend.emit(data.tab);
        });
      }
    });
  }

}
