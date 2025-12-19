import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userRul: string = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient) {}
  signup(obj: any) {
    return this.httpClient.post<{ msg: string; isAdded: boolean }>(
      this.userRul  + '/signup',
      obj
    );
  }
  login(obj: any) {
    return this.httpClient.post<{msg: string, role: string}>(this.userRul + '/login', obj);
  }
}
