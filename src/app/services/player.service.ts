import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  playerUrl: string = 'http://localhost:3000/players';
  constructor(private httpClient: HttpClient) {}
  getAllPlayers() {
    return this.httpClient.get<{ tab: any; nbr: number }>(this.playerUrl);
  }
  getPlayerById(id: string) {
    return this.httpClient.get<{ msg: string; obj: any }>(this.playerUrl + '/' + id);
  }
  addPlayer(obj: any) {
    return this.httpClient.post<{ msh: string; data: any }>(
      this.playerUrl,
      obj
    );
  }
  deletePlayer(id: string) {
    return this.httpClient.delete<{ msg: string; isDeleted: boolean }>(
      this.playerUrl + '/' + id
    );
  }
  editPlayer(newObj: any) {
    return this.httpClient.put<{ msg: string }>(this.playerUrl, newObj);
  }
}
