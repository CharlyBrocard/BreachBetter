import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../services/profil.service';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  
  // TEST LOL API
  // champions : any;
  // users : any;

  // constructor(private profilService: ProfilService) { }


  // ngOnInit(){


  //   this.profilService.getChampions().subscribe((data)=>{
  //     console.log(data);
  //     this.champions = data['champions'];
  //   });


    // Requete bonne de test pour l'api jsonplaceholder

    // let resp= this.http.get("https://jsonplaceholder.typicode.com/users");
    // resp.subscribe((data)=>this.users=data);
    

    constructor(private http:HttpClient ) { }
  
  
  
    ngOnInit(){
      const httpOptions = {
        header: new HttpHeaders({
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
          "Accept-Language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
          "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
          "Origin": "https://developer.riotgames.com",
          "X-Riot-Token": "RGAPI-9cbad70b-4543-4de7-a9ca-0e199873714a"
        })
      }
  
      const req = this.http.get<any>('https://developer.riotgames.com/apis#champion-v3/GET_getChampionInfo', {})
        .subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log(err);
          }
        );
    }
      
  
  }


  
  
    

