import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  teamUrl: string = 'http://localhost:3000/teams';
  constructor(private httpClient: HttpClient) {}
  getAllteams() {
    return this.httpClient.get(this.teamUrl);
  }
  getTeamById(id: number) {
    return this.httpClient.get(this.teamUrl + '/' + id);
  }
  addTeam(obj: any) {
    return this.httpClient.post(this.teamUrl, obj);
  }
  deleteTeam(id: number) {
    return this.httpClient.delete(this.teamUrl + '/' + id);
  }
  editTeam(newObj: any) {
    return this.httpClient.put(this.teamUrl, newObj);
  }
}
