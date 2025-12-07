import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [BannerComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private route: Router) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  login() {
    let user: any = null;
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    const usersTab = JSON.parse(localStorage.getItem('users') || '[]');

    for (let i = 0; i < usersTab.length; i++) {
      if (usersTab[i].email == email && usersTab[i].password == password) {
        user = usersTab[i]
        localStorage.setItem('user', JSON.stringify(user));
      }
    }

    if (user) {
      alert('Login succeeded');
      this.route.navigate(['']); 
    } else {
      alert('Email or password is incorrect');
    }
  }
}
