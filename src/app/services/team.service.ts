import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  teamUrl: string = 'http://localhost:3000/teams';
  constructor(private httpClient: HttpClient) {}
  getAllteams() {
    return this.httpClient.get<{tab:any, nbr: number}>(this.teamUrl);
  }
  getTeamById(id: string) {
    return this.httpClient.get<{ msg: string; obj: any }>(this.teamUrl + '/' + id);
  }
  addTeam(obj: any) {
    return this.httpClient.post
    <{ msg: string }>(this.teamUrl, obj);
  }
  deleteTeam(id: string) {
    return this.httpClient.delete<{ msg: string; isDeleted: boolean }>(this.teamUrl + '/' + id);
  }
  editTeam(newObj: any) {
    return this.httpClient.put<{ msg: string }>(this.teamUrl, newObj);
  }
}
