import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  teamUrl: string = 'http:/localhost:3000/teams';
  constructor(private httpClient: HttpClient) {}
  getAllTeams() {
    return this.httpClient.get(this.teamUrl);
  }
  getTeambyId(id: number) {
    return this.httpClient.get(this.teamUrl + '/' + id);
  }
  deleteTeam(id: number) {
    return this.httpClient.delete(this.teamUrl + '/' + id);
  }
  addteam(obj: any) {
    return this.httpClient.post(this.teamUrl, obj);
  }
  editTeam(newObj: any) {
    return this.httpClient.put(this.teamUrl, newObj);
  }
}
