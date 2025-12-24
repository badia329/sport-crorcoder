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
import { UserService } from '../../services/user.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  imports: [BannerComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: any = {};
  errorMsg: string = '';
  loginForm!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userServcie: UserService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    
    // استدعي الدالة عند تحميل الصفحة
    this.isLoggedIn();
  }

  // أضف هذه الدالة ← المهمة
  isLoggedIn(): boolean {
    let jwt = localStorage.getItem("token");
    if(jwt) {
      this.user = jwtDecode(jwt);
      return true;
    }
    return false;
  }

  login() {
    if (this.loginForm.valid) {
      console.log('Form Values:', this.loginForm.value);
      this.userServcie.login(this.loginForm.value).subscribe((data) => {
        console.log('Here is response from BE', data);
        if (data.msg != '2') {
          this.errorMsg = 'Invalid Email/Password';
        } else {
          localStorage.setItem('token', data.user);
          let decodedToken: any = jwtDecode(data.user);
          this.user = decodedToken; // ← احفظ المستخدم
          
          if (decodedToken.role == 'client') {
            this.router.navigate(['']);
          } else {
            this.router.navigate(['admin']);
          }
        }
      });
    }
  }
  
  // دالة تسجيل الخروج
  logout() {
    localStorage.removeItem('token');
    this.user = {};
    this.router.navigate(['signin']);
  }
}
