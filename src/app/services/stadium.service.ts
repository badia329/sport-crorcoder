import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StadiumService {
  stadiumUrl: string = 'http://localhost:3000/stadium';
  constructor(private httpClient: HttpClient) {}

  getAllStadium() {
    return this.httpClient.get<{ tab: any; nbr: number }>(this.stadiumUrl);
  }

  getStadiumById(id: string) {
    return this.httpClient.get<{ msg: string; obj: any }>(
      this.stadiumUrl + '/' + id
    );
  }

  deleteStadium(id: string) {
    return this.httpClient.delete<{ msg: string; isDeleted: boolean }>(
      this.stadiumUrl + '/' + id
    );
  }

  addStadium(obj: any) {
    return this.httpClient.post<{ msg: string }>(this.stadiumUrl, obj);
  }

  editStadium(newObj: any) {
    return this.httpClient.put<{ msg: string }>(this.stadiumUrl, newObj);
  }
}
