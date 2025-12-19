import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  //backend address (adress de destiantion du backend)
  matchUrl: string = 'http://localhost:3000/matches';
  // httpClient : send request
  constructor(private httpClient: HttpClient) {}
  // request number one : get all matches
  // repnse : array of matches
  getAllMatches() {
    return this.httpClient.get<{ tab: any; nbr: number }>(this.matchUrl);
  }
  // request 1 : get match by id
  // reponse : one object
  getMatchById(id: string) {
    return this.httpClient.get<{ msg: string; obj: any }>(
      this.matchUrl + '/' + id
    );
  }
  // request 3 : delete match by id
  // response: true/ flase || 'deleted/not deleted
  deleteMatch(id: string) {
    return this.httpClient.delete<{ msg: string; isDeleted: boolean }>(
      this.matchUrl + '/' + id
    );
  }
  // request 4 : add match
  // response : created object // true/falsec || 'added/not added'
  addMatch(obj: any) {
    return this.httpClient.post<{ msg: string }>(this.matchUrl, obj);
  }
  // request 5 : edit match
  // response : true/false || 'edited/not edited
  editMatch(newObj: any) {
    return this.httpClient.put<{ msg: string }>(this.matchUrl, newObj);
  }
  searchMatchByTeamName(obj: any) {
    return this.httpClient.post<{ tab: any; msg: string }>(
      this.matchUrl + '/searchMatch',
      obj
    );
  }
}
