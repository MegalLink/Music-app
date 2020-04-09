import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root' // aqui le dice que esta proveido, ya no hay que ponerlo en app.module.ts como provider por el decorador
})
export class SpotifyService {

  constructor(private _http:HttpClient) { 
    console.log("Spotify Service listo")
  }
  private tokenSpo:string ="BQCo6Rw2cA5AD5CSOX49Ja54tk-CA8iPucXDOqvEtuf6pckYVlM__cHHib1mEjwDIKJGAReldYlanadQax8";
  getNewReleases(){
    const headers=new HttpHeaders({
     'Authorization': `Bearer ${this.tokenSpo}`
    })
    //https://api.spotify.com/v1/browse/new-releases?limit=5
     return this._http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers}).pipe(map(data=>{
        return data['albums'].items;
     }))
  }
  getArtista(termino:string){
    const headers=new HttpHeaders({
      'Authorization': `Bearer ${this.tokenSpo}`
     })
     //https://api.spotify.com/v1/browse/new-releases?limit=5
      return this._http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers}).pipe(map(data=>{
      
        return data['artists'].items;
     }))
  }
}
