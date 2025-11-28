import { Component } from '@angular/core';
import { CupEventComponent } from '../cup-event/cup-event.component';
import { ResultComponent } from '../result/result.component';
import { NewsComponent } from '../news/news.component';
import { StandingsComponent } from '../standings/standings.component';
import { VideosComponent } from '../videos/videos.component';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-home',
  imports: [CupEventComponent, ResultComponent, NewsComponent, StandingsComponent, VideosComponent, BlogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
