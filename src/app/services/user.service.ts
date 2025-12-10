import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userRul: string = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient) {}
  login(obj: any) {
    return this.httpClient.post(this.userRul + '/login', obj);
  }
  signup(obj: any) {
    return this.httpClient.post(this.userRul + '/signup', obj);
  }
}