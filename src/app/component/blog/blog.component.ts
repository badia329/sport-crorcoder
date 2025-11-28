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
  articleTab: any = [
    {
      date: "May 20, 2020",
      title: "Romolu to stay at Real Nadrid?",
      image: "images/img_1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."
    },
    {
      date: "May 20, 2020",
      title: "Romolu to stay at Real Nadrid?",
      image: "images/img_3.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."
    }
  ]
}
