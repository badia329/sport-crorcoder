import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil',
  imports: [BannerComponent, CommonModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  usersTab : any = []
  goToInfo(id: string) {

  }
}
