import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { BlogComponent } from './blog/blog.component';
import { NewsComponent } from './news/news.component';
import { StandingsComponent } from './standings/standings.component';
import { CupEventsComponent } from './cup-events/cup-events.component';
import { ResultComponent } from "./result/result.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, NewsComponent, FooterComponent, BlogComponent, StandingsComponent, CupEventsComponent, ResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sport';
}
