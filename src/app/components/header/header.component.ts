import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import {jwtDecode} from 'jwt-decode';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
user: any = {};
constructor(private router: Router) {}
isLoggedIn() {
  let jwt = localStorage.getItem("token");
  if (jwt) {
    this.user = jwtDecode(jwt);
  }
  return !!jwt;
}
logOut(){
  alert("message")
  localStorage.removeItem("token")
  this.router.navigate([''])
}
}