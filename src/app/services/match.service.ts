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
    return this.httpClient.get(this.matchUrl);
  } 
  // request 1 : get match by id
  // reponse : one object
  getMatchById(id: number) {
    return this.httpClient.get(this.matchUrl + '/' + id);
  
     }
  // request 3 : delete match by id
  // response: true/ flase || 'deleted/not deleted
  deleteMatch(id: number) {
    return this.httpClient.delete(this.matchUrl + '/' + id);
  }
  // request 4 : add match
  // response : created object // true/falsec || 'added/not added'
  addMatch(obj: any) {
    return this.httpClient.post(this.matchUrl, obj);
  }
  // request 5 : edit match
  // response : true/false || 'edited/not edited
  editMatch(newObj: any) {
    return this.httpClient.put(this.matchUrl, newObj); 
  }
}
