import { Component } from '@angular/core';
import { InfoComponent } from "../info/info.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-news',
  imports: [InfoComponent, NgFor],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  newsTab: any = [
    {
      name: "John Smith",
      image: "images/img_1.jpg",
      avatar: "images/person_1.jpg",
      title: "Messi set to lead Barcelona comeback",
      date: "20/11/2025"
    },
    {
      name: "Emma Johnson",
      image: "images/img_2.jpg",
      avatar: "images/person_2.jpg",
      title: "Premier League: Manchester City surprises",
      date: "21/11/2025"
    },
    {
      name: "Liam Brown",
      image: "images/img_3.jpg",
      avatar: "images/person_3.jpg",
      title: "Champions League: Real Madrid updates",
      date: "22/11/2025"
    }
  ]
}
