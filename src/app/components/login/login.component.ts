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
      email: ['', [Validators.required, Validators.email, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  login() {
    if (this.loginForm.valid) {
      console.log('Form Values:', this.loginForm.value);
      this.userServcie.login(this.loginForm.value).subscribe((data) => {
        console.log('Here is response from BE', data);
        if (data.msg != '2') {
          (this.errorMsg = 'Invalid Email/Password'), data;
        } else {
          if (data.role == 'client') {
            this.router.navigate(['']);
          } else {
            this.router.navigate(['admin']);
          }
        }
      });
    }
  }
}
