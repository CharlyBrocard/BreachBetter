import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ProfilService {

  // API_KEY = 'RGAPI-9cbad70b-4543-4de7-a9ca-0e199873714a';

  // public getChampions(){
  //   return this.http.get(`https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${this.API_KEY}`);
  //}
//   private riotUrl = 'https://br1.api.riotgames.com/lol/static-
//   data/v3/champions?api_key=myApiKey';
   constructor(private http: HttpClient) { }
//   getChampion(): Observable<Champion[]> {
//     return this._http.get(this.riotUrl)
//     .map((res:Response) => res.json().data)
//         .do(data => console.log(JSON.stringify(data)));
// }
}


