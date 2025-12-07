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
import { generateId } from '../../shared/genricFunction';

@Component({
  selector: 'app-signup',
  imports: [BannerComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  obj: any = {};
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    console.log('Here sign Up');

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
    const usersTab = JSON.parse(localStorage.getItem('users') || '[]');
    this.obj = { ...this.signupForm.value };
    this.obj.id = generateId(usersTab);
    usersTab.push(this.obj);
    localStorage.setItem('users', JSON.stringify(usersTab));
    console.log('here is obj user', usersTab);
    this.signupForm.reset();
    this.obj = {};
  }
}
