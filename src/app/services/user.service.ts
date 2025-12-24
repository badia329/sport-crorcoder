import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userRul: string = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient) {}
  signup(obj: any, photo: File) {
    console.log(photo);
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
    return this.httpClient.post<{ msg: string; user: any }>(
      this.userRul + '/login',
      obj
    );
  }
  getAllUsers() {
    return this.httpClient.get<{ tab: any; nbr: number }>(this.userRul);
  }
  getUserById(id: string) {
    return this.httpClient.get<{ msg: string; obj: any }>(
      this.userRul + '/' + id
    );
  }
  deleteUser(id: string) {
    return this.httpClient.delete<{ msg: string; isDeleted: boolean }>(
      this.userRul + '/' + id
    );
  }
  editUser(newObj: any) {
    return this.httpClient.put<{ msg: string }>(this.userRul, newObj);
  }
}
