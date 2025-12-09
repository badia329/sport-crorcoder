import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  playerUrl: string = 'http://localhost:3000/players';
  constructor(private httpClient: HttpClient) {}
  getAllPlayers() {
    return this.httpClient.get(this.playerUrl);
  }
  getPlayerById(id: number) {
    return this.httpClient.get(this.playerUrl + '/' + id);
  }
  addPlayer(obj: any) {
    return this.httpClient.get(this.playerUrl, obj);
  }
  deletePlayer(id: number) {
    return this.httpClient.delete(this.playerUrl + '/' + id);
  }
  editPlayer(newObj: any) {
    return this.httpClient.put(this.playerUrl, newObj);
  }
}
