import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { confirmPasswordValidator } from '../../shared/confirm-password.validator';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [BannerComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  obj: any = {};
  signupForm!: FormGroup;
  errorMsg: string = '';
  photo: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      },
      {
        validators: confirmPasswordValidator,
      }
    );
  }
  signup() {
    console.log('Here is user', this.signupForm.value);
    let path = this.router.url;
    console.log('Here is path', path);
    if (path == '/signup') {
      this.signupForm.value.role = 'client';
    } else {
      this.signupForm.value.role = 'admin';
    }
    this.userService.signup(this.signupForm.value, this.photo).subscribe((data) => {
      console.log('Here is response agter signup', data);
      if (data.isAdded) {
        this.router.navigate(['signin']);
      } else {
        this.errorMsg = 'Email Already Exists';
      }
    });
  }
  onImageSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      this.photo = inputElement.files[0];
      console.log('File type:', this.photo.constructor.name)
    }
  }
}
