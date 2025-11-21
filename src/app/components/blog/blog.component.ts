import { Component } from '@angular/core';
import { ArticleComponent } from "../article/article.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [ArticleComponent, NgFor],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  articlesTab: any = [
    {
      title: "Romolu to stay at Real Nadrid?",
      date: "May 20, 2020",
      description: "Romolu might continue his contract with Real Nadrid after the latest season performance.",
      image: "images/img_1.jpg"
    },
    {
      title: "Messi set to lead Barcelona comeback",
      date: "May 21, 2020",
      description: "Messi is expected to play a key role in Barcelona's upcoming matches this season.",
      image: "images/img_3.jpg"
    },
  ]
}
