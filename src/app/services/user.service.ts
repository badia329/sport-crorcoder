import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userRul: string = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient) {}
  signup(obj: any, photo: File) {
    console.log(photo)
    let formData = new FormData();
    formData.append('photo', photo);
    formData.append('firstName', obj.firstName);
    formData.append('lastName', obj.lastName);
    formData.append('email', obj.email);
    formData.append('password', obj.password);
    formData.append('phone', obj.phone);
    formData.append('role', obj.role);
    return this.httpClient.post<{ msg: string; isAdded: boolean }>(
      this.userRul + '/signup',
      formData
    );
  }
  login(obj: any) {
    return this.httpClient.post<{ msg: string; role: string }>(
      this.userRul + '/login',
      obj
    );
  }
}
