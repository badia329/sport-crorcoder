import { Component } from '@angular/core';
import { CupEventsComponent } from '../cup-events/cup-events.component';
import { StandingsComponent } from '../standings/standings.component';
import { NewsComponent } from '../news/news.component';
import { ResultComponent } from '../result/result.component';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-home',
  imports: [BlogComponent, CupEventsComponent,StandingsComponent,NewsComponent,ResultComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
