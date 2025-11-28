import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panner-image',
  imports: [],
  templateUrl: './panner-image.component.html',
  styleUrl: './panner-image.component.css'
})
export class PannerImageComponent {
  @Input() title: string = 'Default Title';
  @Input() imageUrl: string = 'images/bg_3.jpg';
}
