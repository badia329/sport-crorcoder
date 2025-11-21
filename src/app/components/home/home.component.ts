import { Component } from '@angular/core';
import { CupEventsComponent } from '../cup-events/cup-events.component';
import { StandingsComponent } from '../standings/standings.component';
import { NewsComponent } from '../news/news.component';
import { ResultComponent } from '../result/result.component';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-home',
  imports: [BlogComponent, CupEventsComponent, StandingsComponent, NewsComponent, ResultComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mathchObj: any = {
    id: 1,
    scoreOne: 3,
    scoreTwo: 1,

    teamOne: "FC Barcelona",
    teamTwo: "Real Madrid",

    playersOne: [
      { name: "Robert Lewandowski", number: 9 },
      { name: "Pedri", number: 8 },
      { name: "Gavi", number: 6 },
      { name: "Ronald Araújo", number: 4 }
    ],

    playersTwo: [
      { name: "Vinícius Júnior", number: 7 },
      { name: "Jude Bellingham", number: 5 },
      { name: "Rodrygo", number: 11 },
      { name: "Toni Kroos", number: 8 }
    ]
  }
}
